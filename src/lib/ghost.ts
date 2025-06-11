import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const hasValidCredentials = import.meta.env.VITE_GHOST_URL && import.meta.env.VITE_GHOST_CONTENT_KEY;

export const ghostClient = hasValidCredentials 
  ? new GhostContentAPI({
      url: import.meta.env.VITE_GHOST_URL,
      key: import.meta.env.VITE_GHOST_CONTENT_KEY,
      version: "v5.0",
    })
  : null;

// Posts API
export async function getPosts(options = {}) {
  if (!ghostClient) {
    console.warn('Ghost client not initialized - missing credentials');
    return [];
  }

  try {
    return await ghostClient.posts
      .browse({
        limit: "all",
        include: ["tags", "authors"],
        ...options,
      })
      .catch((err) => {
        console.error(err);
        return [];
      });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug: string) {
  if (!ghostClient) {
    console.warn('Ghost client not initialized - missing credentials');
    return null;
  }

  try {
    return await ghostClient.posts
      .read({
        slug,
        // include: ["tags", "authors"],
      })
      .catch((err) => {
        console.error(err);
        return null;
      });
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

// Newsletter subscription
export async function subscribeToNewsletter(email: string) {
  if (!import.meta.env.VITE_GHOST_URL) {
    console.warn('Ghost URL not configured - newsletter subscription disabled');
    throw new Error('Newsletter subscription is not configured');
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_GHOST_URL}/members/api/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
        },
        body: JSON.stringify({
          email,
          newsletters: [{ enabled: true }],
          labels: ["newsletter"],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Subscription failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    throw error;
  }
}
