"use client";

import { use } from "react";

export default function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);

    return <div className="project-section">{slug}</div>;
}
