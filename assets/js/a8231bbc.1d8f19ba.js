"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[7049],{53746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(74848),s=n(28453);const r={sidebar_position:3,id:"Network",slug:"network"},o="Network",d={id:"nutanix-ce-installation-guide/recommendations/Network",title:"Network",description:"This section outlines network-related requirements that must be addressed before proceeding with the install.",source:"@site/docs/nutanix-ce-installation-guide/recommendations/network.md",sourceDirName:"nutanix-ce-installation-guide/recommendations",slug:"/nutanix-ce-installation-guide/recommendations/network",permalink:"/nutanix-ce-installation-guide/recommendations/network",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"Network",slug:"network"},sidebar:"defaultSidebar",previous:{title:"Software",permalink:"/nutanix-ce-installation-guide/recommendations/software"},next:{title:"Install Cluster",permalink:"/nutanix-ce-installation-guide/install-cluster"}},a={},l=[{value:"IP Address Considerations",id:"ip-address-considerations",level:2},{value:"Firewall Considerations",id:"firewall-considerations",level:2}];function c(e){const t={admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"network",children:"Network"}),"\n",(0,i.jsx)(t.p,{children:"This section outlines network-related requirements that must be addressed before proceeding with the install."}),"\n",(0,i.jsx)(t.h2,{id:"ip-address-considerations",children:"IP Address Considerations"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Nutanix recommends using static IP addresses for all nodes and CVMs. If the customer uses a DHCP server, ensure the assigned IP addresses are excluded from the DHCP pool."})}),"\n",(0,i.jsxs)(t.p,{children:["You need to reserve two (2) IP addresses for ",(0,i.jsx)(t.strong,{children:"each"})," node in the cluster. The first IP is for the node itself, and the second is for the CVM that will run on that node.\r\nNutanix recommends using the 10.x.x.x or 172.x.x.x IP address schemes. Use the Network Information Checklist in the appendix to record this information before the install."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Community Edition reserves the IP range 192.168.5.1 through 192.168.5.254 for internal communication between nodes. Ensure the customer is not using this range for any other device on the network!"})}),"\n",(0,i.jsx)(t.h2,{id:"firewall-considerations",children:"Firewall Considerations"}),"\n",(0,i.jsx)(t.p,{children:"The following table outlines which firewall ports must be open for Community Edition to communicate properly."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Table 2: Firewall Port Requirements"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Purpose"}),(0,i.jsx)(t.th,{children:"Port"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SSH to both CVM and hypervisor"}),(0,i.jsx)(t.td,{children:"TCP 22"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"NTP Service"}),(0,i.jsx)(t.td,{children:"UDP123"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Prism Web Console"}),(0,i.jsx)(t.td,{children:"TCP 80; 9440"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cluster remote support"}),(0,i.jsx)(t.td,{children:"TCP 80; 443"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Nutanix Pulse (a service that sends cluster alerts and usage statistics to Nutanix)"}),(0,i.jsx)(t.td,{children:"TCP 8443"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Nutanix Guest Tools (NGT) communication between guest VM and CVM"}),(0,i.jsx)(t.td,{children:"TCP 2074"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Source: Nutanix. (2020). \u201cRecommendation on Firewall Ports Config, KB 1478\u201d, \u201cGetting Started with Nutanix Community Edition\u201d"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Figure 1: Basic Communication Diagram"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(507).A+"",width:"1203",height:"1036"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},507:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/nutanix_ce_fig1-131e37cabe74aa98a960fca215c2fae6.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);