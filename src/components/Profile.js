import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const [userMetadata, setUserMetadata] = React.useState(null);

  React.useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "amwebexpert.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage({accessToken, userSub: user.sub});
        } else {
          console.log('ReactNativeWebView not available', accessToken, user.sub);
        }

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    if (user) {
      getUserMetadata();
    }
  }, [getAccessTokenSilently, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div><strong>User metadata:</strong></div>
        {userMetadata ? (
          <pre style={{ display: 'inline-block', border: '1px solid grey', textAlign: "left", padding: 20 }}>
            {JSON.stringify(userMetadata, null, 2)}
          </pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;
