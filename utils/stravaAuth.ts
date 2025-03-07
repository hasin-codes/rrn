const STRAVA_API_URL = "https://www.strava.com/api/v3";
const STRAVA_TOKEN_URL = "https://www.strava.com/oauth/token";

// Since we're not using environment variables, we'll use hardcoded demo values
// In a real app, you would use environment variables
const DEMO_CLIENT_ID = "12345";
const DEMO_CLIENT_SECRET = "demo_secret";
const DEMO_REFRESH_TOKEN = "demo_refresh_token";
const DEMO_ACCESS_TOKEN = "demo_access_token";

let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

export async function getStravaToken(): Promise<string> {
  // For demo purposes, just return a placeholder token
  // In a real app with proper auth, you would implement token refresh logic
  return DEMO_ACCESS_TOKEN;
  
  // The following code would be used in a real implementation with env vars:
  /*
  // If we have a cached token that's still valid, use it
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  try {
    // Otherwise, refresh the token
    const response = await fetch(STRAVA_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: DEMO_CLIENT_ID,
        client_secret: DEMO_CLIENT_SECRET,
        refresh_token: DEMO_REFRESH_TOKEN,
        grant_type: "refresh_token",
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to refresh Strava token: ${response.status}`);
    }

    const data = await response.json();
    
    // Cache the new token and its expiry time
    cachedToken = data.access_token;
    tokenExpiry = (data.expires_at * 1000) - 60000; // Convert to ms and subtract 1 minute
    
    return data.access_token;
  } catch (error) {
    console.error("Error refreshing Strava token:", error);
    return DEMO_ACCESS_TOKEN;
  }
  */
} 