import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Standards() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Standards and Practices">
      <section className={"section-lg"}>
        <div className="container">
          <div className={classnames("row", styles.responsiveCentered)}>
            <div className="col col--6 col--offset-3">
              <h2 className="with-underline">Standards and Practices</h2>
              <p className="">Our standards</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Standards;
