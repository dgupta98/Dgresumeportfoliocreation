import{c as p,r as o,j as s,X as F,a as b,m as u}from"./index-BLrk6R23.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],k=p("message-circle",f);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],j=p("send",E);function v(){const[r,m]=o.useState(!1),[h,i]=o.useState([{type:"bot",text:"Hi! Ask me anything about Dipesh's experience, skills, projects, or background."}]),[t,c]=o.useState(""),[x,a]=o.useState(!1),y=["What technologies does Dipesh specialize in?","Tell me about his cloud experience","What are his notable achievements?"],l=n=>{const e=n.toLowerCase();return e.includes("technolog")||e.includes("skill")||e.includes("stack")?`Dipesh specializes in:

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

Try asking about any of these!`},d=()=>{if(!t.trim())return;const n=t.trim();i(e=>[...e,{type:"user",text:n}]),c(""),a(!0),setTimeout(()=>{i(e=>[...e,{type:"bot",text:l(n)}]),a(!1)},600)},g=n=>{i(e=>[...e,{type:"user",text:n}]),a(!0),setTimeout(()=>{i(e=>[...e,{type:"bot",text:l(n)}]),a(!1)},600)};return s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>m(!r),className:"fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 rounded-full",style:{background:"#92400E",color:"#FFFFFF",boxShadow:"0 4px 20px rgba(146,64,14,0.3)",border:"none",cursor:"pointer"},children:r?s.jsx(F,{className:"h-6 w-6"}):s.jsx(k,{className:"h-6 w-6"})}),s.jsx(b,{children:r&&s.jsxs(u.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.25},className:"fixed bottom-16 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-96 max-w-[calc(100vw-1rem)] sm:max-w-96 rounded-2xl overflow-hidden shadow-2xl",style:{background:"#FFFFFF",border:"1px solid #E8E5E0"},children:[s.jsxs("div",{className:"p-3 sm:p-4",style:{background:"#92400E"},children:[s.jsx("h3",{className:"flex items-center gap-2 text-sm sm:text-base",style:{color:"#FFFFFF",fontWeight:600},children:"Ask me anything"}),s.jsx("p",{className:"text-xs mt-1",style:{color:"rgba(255,255,255,0.7)"},children:"About Dipesh's experience & skills"})]}),s.jsxs("div",{className:"h-60 sm:h-80 overflow-y-auto p-3 sm:p-4 space-y-3",style:{background:"#FAFAF8"},children:[h.map((n,e)=>s.jsx("div",{className:`flex ${n.type==="user"?"justify-end":"justify-start"}`,children:s.jsx("div",{className:"max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-line",style:{background:n.type==="user"?"#92400E":"#FFFFFF",color:n.type==="user"?"#FFFFFF":"#4A4A4A",border:n.type==="user"?"none":"1px solid #E8E5E0"},children:n.text})},e)),x&&s.jsx("div",{className:"flex justify-start",children:s.jsx("div",{className:"p-3 rounded-lg",style:{background:"#FFFFFF",border:"1px solid #E8E5E0"},children:s.jsx("div",{className:"flex gap-1",children:[0,.15,.3].map((n,e)=>s.jsx(u.div,{className:"w-2 h-2 rounded-full",style:{background:"#92400E"},animate:{y:[0,-4,0]},transition:{duration:.5,repeat:1/0,delay:n}},e))})})})]}),s.jsxs("div",{className:"p-3 sm:p-4",style:{borderTop:"1px solid #E8E5E0"},children:[s.jsxs("div",{className:"flex gap-2 mb-3",children:[s.jsx("input",{type:"text",value:t,onChange:n=>c(n.target.value),onKeyPress:n=>n.key==="Enter"&&d(),placeholder:"Ask me anything...",className:"flex-1 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-1",style:{background:"#FAFAF8",border:"1px solid #E8E5E0",color:"#1A1A1A"}}),s.jsx("button",{onClick:d,disabled:!t.trim(),className:"px-3 py-2 rounded-lg",style:{background:"#92400E",color:"#FFFFFF",opacity:t.trim()?1:.5,border:"none",cursor:"pointer"},children:s.jsx(j,{className:"h-4 w-4"})})]}),s.jsxs("div",{className:"space-y-1.5",children:[s.jsx("p",{style:{fontSize:"11px",color:"#8A8A8A"},children:"Quick questions:"}),y.map((n,e)=>s.jsx("button",{onClick:()=>g(n),className:"w-full text-left text-xs p-2 rounded transition-colors",style:{background:"rgba(146,64,14,0.08)",color:"#92400E",border:"1px solid rgba(146,64,14,0.15)",cursor:"pointer"},children:n},e))]})]})]})})]})}export{v as AIChatAssistant};
