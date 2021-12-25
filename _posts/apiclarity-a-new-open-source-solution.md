---
title: APIClarity, a New Open Source Solution to Ensure API Visibility & Enhance API Security
authors: Alexei Kravtsov
authorImage: "/assets/blog/authors/alexei-kravtsov.jpg"
date: "2021-09-27"
publishdate: "2021-09-27"
img: "/assets/blog/apiclarity-a-new-open-source-solution/apiclarity-banner-article-1.jpg"
tags: ["101", "security", "kubernetes", "openapi", "api-security", "DevOps", "DevSecOps"]
layout: section
---

Developers are increasingly making use of APIs to accelerate their software’s time to market. While extremely beneficial to the business, the growing trend of leveraging APIs coupled with building applications in a cloud native environment has brought into focus the need for increased visibility and security for APIs.  

APIs, as designed, often differ from their runtime state due to differences over time, deprecated APIs, zombie APIs, and breaking backward compatibility. Many applications do not give clients access to their OpenAPI specification, making new integrations and API risk assessment difficult at best. In short, whether it is a developer leveraging internal APIs, consuming a 3rd party API or producing an API as a service, there is an urgent need for visibility into what APIs are being used in cloud native environments and their security posture. 

## Understanding OpenAPI Specification Reconstruction

Communication between applications can be compared to communication between people. Without such a protocol, communication would be impossible. To draw a Star Trek analogy: imagine Starfleet officers meeting Klingons for the first time and having to reconstruct the Klingon language to be able to understand them. 

Just as Starfleet officers will draw linguistic inferences by making use of rules, so too will APIClarity in reconstructing the API specifications. This concept forms the basis of specification reconstruction. 

## What are the current OpenAPI specification reconstruction tools that provide visibility to APIs and potential changes over time? 

Optic, Avantation, har2openAPI, Response2Schema, InducOapi, SwagDefGen, API Shark, and SwaggerHub are all tools that provide OpenAPI specification reconstruction, that are currently free. However, these tools (apart from Optic, SwaggerHub, and API Shark) do not have the capability to aggregate and detect specification differences over time (i.e., a learning phase) Additionally, most of them do not have a review phase, where developers are allowed to modify the specification. 

* [SwaggerHub](https://swagger.io/): a premium set of tools for API design and documentation. Swagger also includes a specs reconstruction tool but is not open-source and developers are not able to integrate with a runtime environment. 
* [Optic](https://useoptic.com/): an open-source tool that helps developers to document, review and approve API changes prior to deploying them. Optic is great at gating API changes, but as it is not designed to monitor live API traffic and deployed clusters, it lacks scalability. Optic seems better suited for a developers’ personal computer than in a multi-service environment. 

In addition to the above, other vendors include Akita, Imvision and Salt, but these products are not open source solutions. 

## Introducing [APIClarity](http://www.apiclarity.io):

To access  APIClarity on Github, [click here](https://github.com/apiclarity/apiclarity):  

APIClarity is an open source tool, built to reconstruct OpenAPI specifications from real-time traffic seamlessly. APIClarity leverages a service-mesh framework to capture all API traffic in an existing environment. Use APIClarity to: 

* Construct the OpenAPI specification by observing the API traffic 
* Upload OpenAPI specification, review, modify and approve generated OpenAPI specs 
* Alert on any differences between the approved API specification and the one that is observed in runtime, detects shadow & zombie APIs 
* Audit and monitor API findings through its dashboard 

APIClarity’s contributor roadmap includes gRPC, Protobuf, and more. To learn more, tweet us at [#APIClarity](https://twitter.com/hashtag/APIClarity?src=hashtag_click).

![dashboard-image-1](/assets/blog/apiclarity-a-new-open-source-solution/apiclarity-dashboard-1.jpg)
![dashboard-image-2](/assets/blog/apiclarity-a-new-open-source-solution/apiclarity-dashboard-2.jpg)

## APIClarity use cases: 

Via Seamless deployments, without SDKs, code instrumentation or workload modification, APIClarity provides: 

**API Visibility**: Automatically produce a complete inventory of your APIs

**Reconstruction of API Specifications**: APIClarity will monitor API traffic to learn how the API communicates to generate an API reconstruction. APIClarity will aggregate events over time. At any point, review and apply the reconstructed specification.

**Detect API Specification deviations (Realtime and over-time)**: Detect any deviation in real-time communication from the set specifications in real time or leveraging APIClarity’s ability to aggregate events, over a duration of time. Easily compare for differences via provided specifications (uploaded) or reconstructed specifications

## How can APIClarity help with increasing security awareness? 

Identifying the OpenAPI protocol is the first step to adding visibility into API calls and strengthening API security.  It can be used to: 

1. **Detect API security issues** - When analyzing the OpenAPI specification, developers can gain visibility into whether weak authentication was used or whether Personally Identifiable Information (PII) was disclosed.
2. **Eliminate code typos/mistakes** - With the reconstructed OpenAPI Specfication, developers can now generate the client/server infrastructure layer, quicken development, validate input, eliminate typos, and make sure that only the specified APIs are served
3. **Enable fuzz testing** - Instead of, or in addition to, manually detecting API security issues, developers can use the identified specification to enable fuzz testing. [Fuzz testing](https://www.contrastsecurity.com/knowledge-hub/glossary/fuzz-testing#:~:text=In%20the%20world%20of%20cybersecurity,coding%20errors%20and%20security%20loopholes.) is an automated technique consisting of crafting and feeding invalid and unexpected inputs and data into an application in order to find coding errors and security loopholes.
4. **Rectify and complement documentation** - Organizations often neglect to publish API specifications or publish inaccurate or incomplete instances that are not necessarily updated. In many cases, the only available documentation is often an out-of-date SDK manual. Accessing the full API specifications requires dynamically reconstructing them from scratch. APIClarity automates OpenAPI specification reconstruction.
5. **Scanning the API specification for weaknesses** - API security tools, such as 42 Crunch, can be run on a reconstructed API specification to detect weaknesses.
6. **Detection of API changes or drifts over time** - Published OpenAPI documentation may not be updated regularly, so reconstructing the specification from real time traffic will show you the current API state.  With the real time spec in hand, a spec analyzer tool (like 42Crunch) can then show you misconfigurations, vulnerabilities, and other potential API security risks.
7. **Identification of Zombie and Shadow APIs** - When OpenAPI specifications are provided, reconstructing API specifications is crucial in detecting deviations from the published API specification.

On September 21, 2021, the CNCF hosted a webinar on APIClarity, which is available for [replay here](https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-live-webinar-introduction-to-apiclarity-a-wireshark-for-apis/).  To get started using APIClarity today, access it [here via GitHub](https://github.com/apiclarity/apiclarity/).  

APIClarity is a project from the Emerging Technologies & Incubation team at Cisco. Learn more about our projects and team on Twitter [@ciscoemerge](https://twitter.com/ciscoemerge) or [LinkedIn](https://www.linkedin.com/showcase/cisco-emerging-technologies-and-incubation/).

In addition to APIClarity, you can also leverage other security solutions, from Cisco, including [SecureCN](https://eti.cisco.com/application-security), [SecureApp](https://www.appdynamics.com/product/application-security#:~:text=Cisco%20Secure%20Application%20is%20the%20Runtime%20Application%20Self-Protection,Protect%20application%20communications%20without%20additional%20firewalls%20or%20proxies), or [SecureWorkload](https://www.cisco.com/c/en/us/products/collateral/data-center-analytics/tetration-analytics/solution-overview-c22-741289.html#:~:text=Cisco%20Secure%20Workload%20is%20a%20security%20platform%20that,capabilities%20for%20bare-metal%2C%20virtual%20machines%2C%20and%20container-based%20workloads.)  for comprehensive security across your APIs, cloud native applications,  and infrastructure.