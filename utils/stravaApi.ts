import { getStravaToken } from "./stravaAuth";

const STRAVA_API_URL = "https://www.strava.com/api/v3";

export async function getActivityById(activityId: number): Promise<any> {
  try {
    // Get a fresh token
    const accessToken = await getStravaToken();
    
    console.log(`Fetching activity ${activityId} with fresh token`);
    
    const response = await fetch(`${STRAVA_API_URL}/activities/${activityId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Strava API error (${response.status}): ${errorText}`);
      throw new Error(`${response.status} ${response.statusText}: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching activity:", error);
    throw error;
  }
}

// Add a function to get athlete's activities
export async function getAthleteActivities(page = 1, perPage = 10): Promise<any[]> {
  try {
    const accessToken = await getStravaToken();
    
    console.log(`Fetching athlete activities, page ${page}`);
    
    const response = await fetch(
      `${STRAVA_API_URL}/athlete/activities?page=${page}&per_page=${perPage}`, 
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Strava API error (${response.status}): ${errorText}`);
      throw new Error(`${response.status} ${response.statusText}: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching athlete activities:", error);
    throw error;
  }
} 