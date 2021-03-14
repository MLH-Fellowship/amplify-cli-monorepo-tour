import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Data modeling with GraphQL",
    imageUrl: "img/undraw_data_model.svg",
    description: (
      <>
        The GraphQL Transform library allows you to deploy AWS AppSync GraphQL
        APIs with features like NoSQL databases, authentication, elasticsearch
        engines, lambda function resolvers, relationships, authorization, and
        more using GraphQL schema directives.
      </>
    ),
  },
  {
    title: "Multiple environments",
    imageUrl: "img/undraw_multiple_env.svg",
    description: (
      <>
        Support for multiple environments. When you initialize a project with
        the CLI, you create an Amplify backend environment. Every Amplify
        backend environment is a container for the categories added to your
        project.
      </>
    ),
  },
  {
    title: "Infrastructure as code",
    imageUrl: "img/undraw_iaas.svg",
    description: (
      <>
        The AWS Amplify CLI uses AWS CloudFormation and nested stacks. This
        allows you to add or modify configurations locally before you push them
        for execution in your account.
      </>
    ),
  },
  {
    title: "Local mocking",
    imageUrl: "img/undraw_local_mocking.svg",
    description: (
      <>
        Amplify supports running a local server for mocking and testing your
        application before pushing to the cloud with certain categories,
        including API, Storage, Functions, and Hosting.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Explore with us!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
