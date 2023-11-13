import logo from './logo.svg';
import './App.css';
import PLeft from './components/PLeft';
import './components/PLeft.css';
import PCenter from './components/PCenter';
import './components/PCenter.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/* Edit <code>src/App.js</code> and save to reload.*/}
        <h1>OMMO Job Description</h1>

        <h2><b>Responsibilities</b></h2>

        <PLeft>Write and maintain <a href="https://technoteswowowow.medium.com/">well documented</a>,
         high quality code for projects in <a href="https://github.com/sitting-duck?tab=repositories">various languages</a> (modern <a href="https://github.com/sitting-duck/stuff/tree/master/School%20-%20Comp%20Sci">C/C++</a>, <a href="https://github.com/sitting-duck/stuff/tree/master/School%20-%20Comp%20Sci/Machine_Learning_Spring_2016/Decision_Tree_Learning/five">Python</a>, <a href="https://github.com/sitting-duck/unity-docker-interface/blob/main/Assets/Editor/Docker.cs">C#</a>)</PLeft>

        
        <PLeft><a href="https://www.youtube.com/watch?v=VjUWwrW9EVY">Design</a> and implement <a href="https://youtu.be/BWJQ55br3QE">high performance systems</a> with <a href="https://www.youtube.com/watch?v=y0ef0L6hoOA">concurrency</a>, <a href="https://www.youtube.com/watch?v=HvlzI6foozM">low latency</a>, and <a href="https://www.youtube.com/watch?v=0xDd8pmxUgI">low resource</a> <a href="https://www.youtube.com/watch?v=q9Ql0wsd1Lk">usage</a></PLeft>

        <PLeft><a href="https://technoteswowowow.medium.com/list/devops-098aeaaa76dd">Write</a> and <a href="https://blog.devops.dev/building-and-deploying-a-unity-game-with-jenkins-a-comprehensive-guide-d7a0579b1b78">maintain</a> <a href="https://www.youtube.com/watch?v=aUHSjDao5Cg">automated</a> <a href="https://github.com/sitting-duck/dotnet-devops-mvp-example/tree/main">build</a> <a href="https://medium.com/devops-dev/deploying-the-nothinggame-to-the-google-playstore-with-fastlane-on-the-command-line-fb8cd918c562">systems</a> and <a href="https://github.com/sitting-duck/conan-ffmpeg">scripts</a></PLeft>

        <PLeft>Build <a href="https://www.youtube.com/watch?v=gx8-9URxD9o">tests</a> and <a href="https://www.youtube.com/watch?v=YGR_0Jwn7tA">integration</a> <a href="https://www.youtube.com/watch?v=e89HguK6jSQ">tooling</a> to <a href="https://www.youtube.com/watch?v=xuihe7tf6EM">ensure</a> software release <a href="https://technoteswowowow.medium.com/sonarqube-setup-for-php-project-for-xamp-project-7bc1732d8d8e">quality</a>, <a href="https://medium.com/codex/how-to-use-unitys-smart-merge-also-referred-to-as-unity-yamlmerge-with-git-bash-to-resolve-merge-b9c9931b8944">maintainability</a>, and extensibility</PLeft>

        <PLeft>Collaborate on <a href="https://technoteswowowow.medium.com/how-to-make-a-custom-module-for-reusability-in-the-ns-3-network-simulator-9f4a3eb5a2f9">technical</a> designs to meet product, technical, and <a href="https://www.youtube.com/watch?v=tFhiQjtXDIw">end user</a> needs</PLeft>

        <PLeft>Propose and implement solutions to improve software functionality across a range of topics, such as <a href="https://www.youtube.com/watch?v=2uY4jrDI7ho">UI rendering</a>, <a href="https://github.com/sitting-duck/stuff/tree/master/School%20-%20Comp%20Sci/Operating_Systems_Fall_2013/project%203%20-%20Client%20Server%20with%20Unix%20Stream%20Sockets">client-server communication</a>, <a href="https://www.youtube.com/watch?v=kzHZCQUZHR8">concurrency</a> and <a href="https://github.com/sitting-duck/stuff/tree/master/School%20-%20Comp%20Sci/Operating_Systems_Fall_2013/project%202%20-%20DMV%20Simulation%20with%20Semaphores">parallelism</a>, and performance optimization</PLeft>

        <PLeft><a href="https://docs.google.com/spreadsheets/d/1TpujknPbxDdbOs6WDqk4cbGJRSvymms1/edit#gid=572168914">Compiling and assessing</a> <a href="https://community.topazlabs.com/search?q=Ashley">user feedback</a> to improve software performance</PLeft>

        <PLeft>Training and overseeing the activities of the members of the development team</PLeft>

        <h2><b>Qualifications</b></h2>

        <PLeft>3+ years of professional experience, especially in high performance software systems</PLeft>

        <PLeft>Experience in <a href="https://github.com/sitting-duck/computational-geometry-robot-motion-planning-summer-2012-tamu-reu/blob/master/Taming_Large_3D_models_Approximate_Convex_Decomposition_Ashley_Tharp.pdf">modern C/C++</a>, especially relating to cross-platform applications, multithreading, drivers, and <a>API/SDK design</a></PLeft>

        <PLeft>Experience with unit, integration, and functional test design and implementation</PLeft>

        <PLeft>Experience with build systems and CI/CD tools such as <a href="https://github.com/sitting-duck/opencv-projects">CMake</a>, <a href="https://medium.com/@technoteswowowow/deploy-to-google-play-with-gameci-and-github-actions-on-windows-11-74c5b5b1b71d">Github Actions</a>, <a href="https://github.com/sitting-duck/unity-devops-jenkins">Jenkins</a>, etc</PLeft>

        <PLeft>Strong debugging skills, and the ability to quickly chart a path from bug report to viable solutions</PLeft>

        <PLeft>Ability to analyze and optimize code to meet strict performance requirements</PLeft>

        <PLeft>Drive to proactively identify opportunities for improvement in our systems and propose solutions</PLeft>

        <PLeft>Ability to work with minimal supervision, prioritizing and adapting to the needs of the team and leadership adeptly</PLeft>

        <PLeft>Strong written and verbal communication skills</PLeft>

        <h2><b>Nice to Haves</b></h2>
        <PLeft>Experience working with benchmarking and profiling high performance systems</PLeft>
        <PLeft>Experience with C++ frameworks such as <a href="https://youtube.com/playlist?list=PLyz4gagu9XrsMvbn9kcYeLizvWES40CRJ&si=VRLAemrUWd0Ndykl">QT5</a></PLeft>
        <PLeft>Experience in Windows, MacOS, and Linux application development</PLeft>
        <PLeft>Working knowledge of Git, CI/CD, and build automation best practices</PLeft>

        <h2><b>Education</b></h2>
        <PLeft>Me not having completed my bachelors degree in CS came up with the recruiters as a potential reason not to move me forward initially and I understand that.</PLeft>
        <PLeft>When I was working at Corduro there was a lot of excitement about Google potentially buying the company, so stopped going to classes to pursue that.</PLeft>
        <PLeft>When I returned to University I was still working so I transferred from UTD to WGU and have just been taking classes online part time and working.</PLeft>
        <PLeft>I've got 6 classes left to graduate, and 3 of those I have already taken and passed before with high grades, but they did not transfer. so I don't</PLeft>
        <PLeft>think finishing it will be a huge obstacle, or affect my work performance. I plan to continue to get a masters in comp sci or mathematics.</PLeft>
        
      </header>
    </div>
  );
}

export default App;
