const baseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
const aiBaseUrl = (import.meta.env.VITE_AI_API_URL || baseUrl).replace(/\/$/, '');

export async function api(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, { headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options });
  const payload = response.status === 204 ? null : await response.json();
  if (!response.ok) throw new Error(payload?.error || 'Unable to complete the request.');
  return payload;
}

export async function agentApi(path, options = {}) {
  const response = await fetch(`${aiBaseUrl}${path}`, { headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload?.error || 'Unable to complete the request.');
  return payload;
}
