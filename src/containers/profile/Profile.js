import React, {useState, useEffect} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";

export default function Profile() {
  if (openSource.display && openSource.showGithubProfile === "true") {
    // Only import and use lazy loading when needed
    const [GithubProfileCard, setGithubProfileCard] = useState(null);
    const [prof, setrepo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      import("../../components/githubProfileCard/GithubProfileCard").then(module => {
        setGithubProfileCard(() => module.default);
      });
    }, []);

    function setProfileFunction(array) {
      setrepo(array);
      setLoading(false);
    }

    useEffect(() => {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }, []);

    if (loading || !GithubProfileCard || (typeof prof === "string" || prof instanceof String)) {
      return <Contact />;
    }

    return <GithubProfileCard prof={prof} key={prof.id} />;
  } else {
    return <Contact />;
  }
}
