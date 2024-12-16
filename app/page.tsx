import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="prose dark:prose-invert max-w-none space-y-4">
        <div className="float-left mr-8 mb-4">
          <div className="relative w-40 h-40 rounded-lg overflow-hidden">
            <Image src="/images/profile.png" alt="Profile" fill />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <p>
          Hey there! I&apos;m a London based software developer, currently
          crafting tech magic as a <strong>Manager - Experience Technology</strong> at <i>Publicis
          Sapient</i>. My roots trace back to the serene hills of <strong>Almora, Uttarakhand,
          India</strong>, a place as inspiring as my journey in tech. 🌄
        </p>
        <p>
          Though my academic path started with a Science degree, my heart was set
          on tech. Armed with curiosity and a self-taught approach, I leaped into
          the world of software development. What began as a web design gig soon
          evolved into a full-blown passion for <strong>frontend engineering</strong>—and
          eventually, a knack for mastering both <strong>frontend and backend</strong> technologies. ✨
        </p>
        <p>
          At <i>Publicis Groupe</i>, I&apos;m proud to be part of the team
          behind <strong>CoreAI</strong>, an innovative platform fueling AI-driven
          solutions across diverse industries.
        </p>
        <p>
          But hey, it&apos;s not all work and no play! Beyond the keyboard, I
          love hanging out with my family and friends, discovering hidden gems
          around the world, and lending a hand to others on their learning
          or project journeys.
        </p>
        <p>
          Always up for an exciting challenge, a chance to collaborate, or a
          spark of innovation? Let&apos;s connect! I&apos;m open to teaming up
          on passion projects and bold ideas that push boundaries. Together, we
          can create something extraordinary! 🚀
        </p>
        <h2 className="text-2xl font-bold mt-8">
          Things where I have contributed
        </h2>
        <ul>
          <li className="mb-4">
            <strong>CoreAI</strong> - A platform build for Publicis Groupe that
            drives AI innovation across diverse client projects.
          </li>
          <li className="mb-4">
            <strong>ASDA IAM</strong> - I was part of the team that built the
            Identity and Access Management system for ASDA, a leading UK
            retailer. We migrated their legacy system to a modern, Azure
            cloud-based solution.
          </li>
          <li className="mb-4">
            <strong>Slike Video Player</strong> - A Video Player library built
            for Times Internet that is used in multiple of their products which
            has millions of users like toi.in, timesnow and may more regional
            news websites. This was building using native web technologies (HTML
            5 Audio/Video), Typescripts and Google IMA SDK.
          </li>
          <li className="mb-4">
            <strong>Interiview Platform</strong> - I built a live interview
            platform for Times Internet that allows interviewers to conduct live
            interviews with their candidates. This platform was built using
            React, Node.js, and WebRTC.
          </li>
          <li className="mb-4">
            <strong>Many more...</strong> - There are many more projects I have
            worked on and I am proud of those projects. Majorly I have used
            technologies like Python, Node.js, React, Typescript, Next.js, SQL,
            MongoDB, Elasticsearch, Docker, Kubernetes, AWS, Azure, Serverless,
            Lambdas Functions, etc.
          </li>
        </ul>
      </div>
    </div>
  );
}
