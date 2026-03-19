import{c as m,r as c,j as s,m as i,X as f,a as k,S as j}from"./index-DiQdsgSw.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],w=m("message-circle",v);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],S=m("send",N);function A(){const[t,h]=c.useState(!1),[x,o]=c.useState([{type:"bot",text:"Hi! I'm Dipesh's AI assistant. Ask me anything about his experience, skills, projects, or background!"}]),[a,d]=c.useState(""),[g,r]=c.useState(!1),y=["What technologies does Dipesh specialize in?","Tell me about his cloud experience","What are his notable achievements?"],u=n=>{const e=n.toLowerCase();return e.includes("technolog")||e.includes("skill")||e.includes("stack")?`Dipesh specializes in:

• Languages: Python, Java, C
• ML/AI: PyTorch, TensorFlow, scikit-learn, OpenCV
• Backend: Spring Boot, Flask, REST APIs, Microservices
• Cloud: AWS, GCP
• DevOps: Docker, Jenkins, Git/GitLab, CI/CD
• Databases: PostgreSQL, SQL, NoSQL`:e.includes("cloud")||e.includes("migration")?`Dipesh's cloud expertise:

• Led zero-downtime migration of 8M+ records from on-premise to IBM Sterling OMS on Cloud
• Architected data infrastructure on AWS/GCP serving 133M+ records
• 30% performance improvement through cloud optimization
• IBM Certified: Sterling Order Management on Cloud`:e.includes("achievement")||e.includes("accomplish")?`Key achievements:

• Published IEEE research on DeepFake detection
• Zero-downtime migration of 8M+ records
• Architected solutions handling 133M+ records
• 30% performance improvement
• 96% accuracy in Fruit Quality Classification
• 94% accuracy in Face Mask Detection`:e.includes("ml")||e.includes("ai")||e.includes("project")?`Notable ML/AI projects:

• DeepFake Detection (IEEE Published)
• Fruit Quality Classification - 96% accuracy
• Real-Time Face Mask Detection - 94% accuracy
• Stock Market Prediction - 85% accuracy
• Amazon Review Sentiment Analysis - 92% accuracy`:e.includes("education")||e.includes("degree")?`Education:

• MS in Software Engineering - Arizona State University (2025-2027)
• B.Tech in Electrical Engineering - B.P. Poddar Institute (2016-2020)`:e.includes("contact")||e.includes("email")?`Contact info:

• Email: dipeshgupta2010@gmail.com
• Phone: +1 (623) 432-6768
• LinkedIn: linkedin.com/in/dipeshgupta09
• GitHub: github.com/Dipesh30
• Location: Phoenix, Arizona`:`I can help with:

• Technical skills & technologies
• Cloud and backend experience
• ML/AI projects and research
• Educational background
• Professional achievements
• Contact information

Try asking about any of these!`},p=()=>{if(!a.trim())return;const n=a.trim();o(e=>[...e,{type:"user",text:n}]),d(""),r(!0),setTimeout(()=>{const e=u(n);o(l=>[...l,{type:"bot",text:e}]),r(!1)},800)},b=n=>{o(e=>[...e,{type:"user",text:n}]),r(!0),setTimeout(()=>{const e=u(n);o(l=>[...l,{type:"bot",text:e}]),r(!1)},800)};return s.jsxs(s.Fragment,{children:[s.jsxs(i.button,{onClick:()=>h(!t),className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 rounded-full shadow-2xl",style:{background:"linear-gradient(135deg, #5eead4, #14b8a6)",color:"#0a0e17",boxShadow:"0 0 30px rgba(94,234,212,0.3)"},whileHover:{scale:1.1},whileTap:{scale:.9},animate:t?{}:{y:[0,-8,0]},transition:{duration:2,repeat:1/0},children:[t?s.jsx(f,{className:"h-6 w-6"}):s.jsx(w,{className:"h-6 w-6"}),!t&&s.jsx(i.div,{className:"absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full",animate:{scale:[1,1.3,1]},transition:{duration:2,repeat:1/0}})]}),s.jsx(k,{children:t&&s.jsxs(i.div,{initial:{opacity:0,y:100,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:100,scale:.8},transition:{type:"spring",duration:.5},className:"fixed bottom-16 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-96 max-w-[calc(100vw-1rem)] sm:max-w-96 rounded-2xl overflow-hidden shadow-2xl",style:{background:"#0a0e17",border:"1px solid #363636"},children:[s.jsxs("div",{className:"p-3 sm:p-4",style:{background:"linear-gradient(135deg, #5eead4, #14b8a6)"},children:[s.jsxs("h3",{className:"flex items-center gap-2 text-sm sm:text-base",style:{color:"#0a0e17",fontWeight:600},children:[s.jsx(j,{className:"h-4 w-4 sm:h-5 sm:w-5"}),"AI Assistant"]}),s.jsx("p",{className:"text-xs mt-1",style:{color:"rgba(10,14,23,0.7)"},children:"Powered by intelligent Q&A"})]}),s.jsxs("div",{className:"h-60 sm:h-80 overflow-y-auto p-3 sm:p-4 space-y-3",children:[x.map((n,e)=>s.jsx(i.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`flex ${n.type==="user"?"justify-end":"justify-start"}`,children:s.jsx("div",{className:"max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line",style:{background:n.type==="user"?"#5eead4":"rgba(255,255,255,0.05)",color:n.type==="user"?"#0a0e17":"#eae5ec",border:n.type==="user"?"none":"1px solid #363636"},children:n.text})},e)),g&&s.jsx("div",{className:"flex justify-start",children:s.jsx("div",{className:"p-3 rounded-lg",style:{background:"rgba(255,255,255,0.05)",border:"1px solid #363636"},children:s.jsx("div",{className:"flex gap-1",children:[0,.2,.4].map((n,e)=>s.jsx(i.div,{className:"w-2 h-2 rounded-full",style:{background:"#5eead4"},animate:{y:[0,-5,0]},transition:{duration:.6,repeat:1/0,delay:n}},e))})})})]}),s.jsxs("div",{className:"p-3 sm:p-4",style:{borderTop:"1px solid #363636"},children:[s.jsxs("div",{className:"flex gap-2 mb-3",children:[s.jsx("input",{type:"text",value:a,onChange:n=>d(n.target.value),onKeyPress:n=>n.key==="Enter"&&p(),placeholder:"Ask me anything...",className:"flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1",style:{background:"rgba(255,255,255,0.05)",border:"1px solid #363636",color:"#eae5ec"}}),s.jsx("button",{onClick:p,disabled:!a.trim(),className:"px-3 py-2 rounded-lg transition-opacity",style:{background:"#5eead4",color:"#0a0e17",opacity:a.trim()?1:.5},children:s.jsx(S,{className:"h-4 w-4"})})]}),s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("p",{style:{fontSize:"11px",color:"#adacac"},children:"Quick questions:"}),y.map((n,e)=>s.jsx("button",{onClick:()=>b(n),className:"w-full text-left text-xs p-2 rounded transition-colors",style:{background:"rgba(94,234,212,0.05)",color:"#5eead4",border:"1px solid rgba(94,234,212,0.1)"},children:n},e))]})]})]})})]})}export{A as AIChatAssistant};
