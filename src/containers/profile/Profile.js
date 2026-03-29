import React, {useState, useEffect} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";

export default function Profile() {
  const [GithubProfileCard, setGithubProfileCard] = useState(null);
  const [prof, setrepo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!openSource.display || openSource.showGithubProfile !== "true") {
      setLoading(false);
      return;
    }

    import("../../components/githubProfileCard/GithubProfileCard")
      .then(module => {
        setGithubProfileCard(() => module.default);
      })
      .catch(error => {
        console.error("Profile component import failed", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!openSource.display || openSource.showGithubProfile !== "true") {
      setLoading(false);
      return;
    }

    const getProfileData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw new Error("Profile fetch failed");
        })
        .then(response => {
          setrepo(response.data.user);
          setLoading(false);
        })
        .catch(error => {
          console.error(
            `${error} (GitHub contact profile could not be displayed)`
          );
          setLoading(false);
          openSource.showGithubProfile = "false";
        });
    };

    getProfileData();
  }, []);

  if (!openSource.display) {
    return null;
  }

  if (
    !openSource.showGithubProfile ||
    openSource.showGithubProfile !== "true" ||
    loading ||
    !GithubProfileCard ||
    typeof prof === "string" ||
    prof instanceof String
  ) {
    return <Contact />;
  }

  return <GithubProfileCard prof={prof} key={prof.id} />;
}
