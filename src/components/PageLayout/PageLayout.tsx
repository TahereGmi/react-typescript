import React from "react";
import "./styles.scss";

export interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="page-layout">
      <header className="header">Task Management &gt; {title}</header>
      <div className="page-body">{children}</div>
    </div>
  );
}

export default PageLayout;
