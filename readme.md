# Atomic Design
Atomic Engineering is a methodology for building user interfaces by applying the principles of Atomic Design directly to the front-end codebase. It's a disciplined, component-first approach that organizes UI code into a strict hierarchy, making applications more scalable, maintainable, and consistent.The core idea is to build UIs from the bottom up, starting with the smallest possible components and composing them into larger, more complex features.

<h3>The core principles : A Hierarchy of Components</h3>
- <b>Atoms</b>: These are the foundational building blocks of the UI—the smallest, indivisible elements. They have no business logic on their own and are globally styled.
- <b>Molecules</b>: These are functional groups of atoms bonded together. They are the smallest components that begin to have a specific purpose.
- <b>Organisms</b>: These are more complex UI components composed of molecules and/or atoms. They form distinct sections of an interface and can often stand alone.
- <b>Templates</b>: These are page-level objects that define the layout and structure of a page by arranging organisms. They are placeholders that show where content will go, but contain no actual data.
- <b>Pages</b>: These are specific instances of templates where real content (data, images, text) is injected. This is the final, high-fidelity stage where the UI is tested with real-world data to see how the system holds up.