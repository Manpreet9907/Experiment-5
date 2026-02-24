# Experiment-5
Experiment 5.1: Component-Based Lazy Loading
we implemented component-based lazy loading in React to improve frontend performance. Instead of loading all components at once, we used React.lazy() to load the Dashboard component only when it is required. The Suspense component was used to display a fallback UI (such as a loading message) while the component was being loaded. An artificial delay was added to clearly visualize the loading behavior. This approach reduces the initial bundle size and improves application performance by loading components dynamically.
<img width="1110" height="725" alt="Screenshot 2026-02-13 150058" src="https://github.com/user-attachments/assets/efecbd9c-2227-4209-8350-0e8aad8880b2" />
<img width="1371" height="728" alt="Screenshot 2026-02-13 150048" src="https://github.com/user-attachments/assets/c3be3fd3-d745-42b5-b0d3-d8aea28963c6" />

Experiment 5.2: Route-Based Lazy Loading
we implemented route-based lazy loading in a Single Page Application using React Router DOM. Instead of loading all route components at startup, we used React.lazy() to dynamically load the Profile and Dashboard components only when their respective routes were accessed. The Suspense component was used to display a fallback UI inside the content area while the components were loading. This approach reduces the initial load time and improves overall application performance by splitting the code based on routes.
<img width="1105" height="674" alt="Screenshot 2026-02-24 225946" src="https://github.com/user-attachments/assets/f7bfa69d-c2c1-4e98-935f-4deefd897901" />
<img width="1093" height="641" alt="Screenshot 2026-02-24 225956" src="https://github.com/user-attachments/assets/fff8b38e-1864-4181-bc2d-9cfd2bf96f6c" />
