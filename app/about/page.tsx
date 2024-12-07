import Image from 'next/image';

export default function About() {
  return (
    <div className="space-y-8">      
      <div className="prose dark:prose-invert max-w-none space-y-4">
        <div className="float-left mr-8 mb-4">
          <div className="relative w-40 h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Profile"
              fill
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <p>
          I&apos;m a software engineer and developer advocate. I&apos;m originally from
          Bangalore, India. I owe much of my career to the Web and Open Source.
        </p>
        
        <p>
          I spent my early career advocating for and teaching people how to use
          modern web technologies and later developed a passion for JavaScript
          and Web development.
        </p>

        <p>
          After joining the development community, I got my first full-time job as
          a frontend engineer and have been working with various technologies and
          frameworks since then.
        </p>

        <p>
          After being involved in creating numerous projects and contributing to
          open source, I saw the opportunity in creating tooling and infrastructure
          to make the Web faster, with a focus on developer experience (DX).
        </p>

        <h2 className="text-2xl font-bold mt-8">Technical contributions</h2>
      </div>
    </div>
  );
}