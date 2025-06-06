# Atomic Design
Atomic Engineering is a methodology for building user interfaces by applying the principles of Atomic Design directly to the front-end codebase. It's a disciplined, component-first approach that organizes UI code into a strict hierarchy, making applications more scalable, maintainable, and consistent.The core idea is to build UIs from the bottom up, starting with the smallest possible components and composing them into larger, more complex features.

<h3>The core principles : A Hierarchy of Components</h3>
<br><b>Atoms</b>: These are the foundational building blocks of the UI—the smallest, indivisible elements. They have no business logic on their own and are globally styled.
<br><br><b>Molecules</b>: These are functional groups of atoms bonded together. They are the smallest components that begin to have a specific purpose.
<br><br><b>Organisms</b>: These are more complex UI components composed of molecules and/or atoms. They form distinct sections of an interface and can often stand alone.
<br><br><b>Templates</b>: These are page-level objects that define the layout and structure of a page by arranging organisms. They are placeholders that show where content will go, but contain no actual data.
<br><br><b>Pages</b>: These are specific instances of templates where real content (data, images, text) is injected. This is the final, high-fidelity stage where the UI is tested with real-world data to see how the system holds up.

## Key Benefits for Development Teams : 
+ <b>Scalability & Maintainability</b>: Updating a single Atom (like the primary button style) automatically propagates that change everywhere it's used, making system-wide updates simple and safe.
+ <b>Consistency & Reusability</b>: It enforces UI and functional consistency across the entire application and eliminates the need to build the same element multiple times.
+ <b>Faster Development</b>: New features can be rapidly assembled by combining existing, pre-tested components, much like building with LEGOs.
+ <b>Improved Collaboration</b>: It creates a shared vocabulary and mental model between designers and developers, bridging the gap between design mockups and live code.

# 12 Factor App 
The Twelve-Factor App is a methodology for building modern, scalable, and maintainable software-as-a-service (SaaS) applications. It is a set of twelve best practices designed to create a clean contract between an application and the operating system it runs on, enabling portability and resilience.Following are the 12-factors explained : 

+ Codebase : There should be one codebase tracked in version control for each application, but it can have many deploys
+ Dependencies : An application must explicitly declare and isolate its dependencies. It should not rely on system-wide packages. 
+ Config: Configuration (like database credentials, API keys, or deployment-specific settings) should be kept separate from the code. Using environment variables is the recommended approach, which prevents secrets from being checked into version control.
+ Backing Services : Any external service the app consumes (like a database, message queue, or cache) should be interchangeable. 
+ Build , Release , Run : <br>
Build: Transforms code into an executable bundle (a "build").
Release: Combines the build with the environment's config.
Run: Executes the release as a running process.
This separation makes rollbacks easy and ensures a consistent deployment process.
+ Processes : The application should not store any persistent data in its own memory or on disk. 
+ Port Binding : The application should be self-contained and expose its functionality (e.g., an HTTP service) by binding to a port. It should not depend on a specific webserver being injected into its runtime.
+ Concurrency : Instead of making a single process larger (vertical scaling), you achieve concurrency by running multiple instances of the application's processes (horizontal scaling). 
+ Disposability : Processes should be "disposable"—they can be started or stopped at a moment's notice. This allows for rapid scaling, deployments, and fast recovery from crashes.
+ Dev/Prod Parity : Minimize the differences in tools, technologies, and backing services between environments. 
+ LOgs : The application should not be concerned with storing or routing its own log files. Instead, it should write its log output to stdout. 
+ Admin Processes : ny administrative tasks, such as database migrations or running a REPL console, should be executed as a separate, one-off process in the same environment as the application, using the same codebase and config.