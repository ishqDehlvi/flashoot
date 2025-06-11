declare module '@tryghost/admin-api' {
  interface GhostAdminAPIOptions {
    url: string;
    key: string;
    version: string;
  }

  interface MemberCreateOptions {
    email: string;
    name?: string;
    note?: string;
    labels?: string[];
    email_disabled?: boolean;
    subscribed?: boolean;
  }

  interface Members {
    add: (options: MemberCreateOptions) => Promise<any>;
  }

  export default class GhostAdminAPI {
    constructor(options: GhostAdminAPIOptions);
    members: Members;
  }
} 