class Github {
  constructor() {
    this.client_id = 'a078de275c57bbce91f6';
    this.client_secret = 'c621f14dfd5dd39a88a2d8576caa0839e9fae1a3';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}