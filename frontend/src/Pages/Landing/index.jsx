import React, { useEffect } from 'react';

export default function Index() {
  const client_id = import.meta.env.VITE_GITHUB_CLIENT_ID;


  function Login() {
    const scopes = [
      'repo', 'repo:status', 'repo_deployment', 'public_repo', 'repo:invite', 'security_events',
      'admin:repo_hook', 'write:repo_hook', 'read:repo_hook', 'admin:org', 'write:org', 'read:org',
      'admin:public_key', 'write:public_key', 'read:public_key', 'admin:org_hook', 'gist',
      'notifications', 'user', 'read:user', 'user:email', 'user:follow', 'project', 'read:project',
      'delete_repo', 'write:packages', 'read:packages', 'delete:packages', 'admin:gpg_key',
      'write:gpg_key', 'read:gpg_key', 'codespace', 'workflow'
    ].join(' ');

    window.location.assign(`https://github.com/login/oauth/authorize?client_id=${client_id}&scope=${encodeURIComponent(scopes)}`);
  }

  return (
    <div>Landing
      <button onClick={Login}>Login</button>
    </div>
  );
}


// bc40f91347cc3f96012d
// 22a3a5f04c67b04a5542