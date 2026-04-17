from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class IntentExample:
    intent: str
    text: str


WEBSITE_KNOWLEDGE = {
    "company": "TheCOdex Software Solutions",
    "founder": "Veerendra Vishwakarma",
    "location": "Bhopal, Madhya Pradesh, India",
    "email": "thecodexofficial001@gmail.com",
    "phone": "+91 8305223353",
    "pages": [
        "Home",
        "Services",
        "Projects",
        "About",
        "Contact",
        "Privacy Policy",
        "Terms & Conditions",
    ],
    "inquiry_flows": {
        "buy-service": "Use Buy a Service when you already know the service you want and need package guidance.",
        "custom-request": "Use Ask Us What You Want when the requirement is mixed, unique, or not clearly mapped to one service.",
        "start-project": "Use Start Your Project when you want a structured discussion around scope, business goals, features, and timeline.",
        "maintenance-support": "Use Discuss Maintenance when you already have a site, app, or system and need fixes, upgrades, or ongoing support.",
    },
    "services": {
        "development solutions": {
            "summary": "Website development, app development, redesigns, admin panels, dashboards, and maintenance support.",
            "starting_price": "Rs 14,999",
        },
        "infrastructure & computation": {
            "summary": "Network setup, labs, server control systems, NAS storage, and LAN/WAN/MAN planning.",
            "starting_price": "Rs 29,999",
        },
        "ai integration & automation": {
            "summary": "AI business models, workflow automation, AI integrations, and smarter operational systems.",
            "starting_price": "Rs 19,999",
        },
        "growth, marketing & advisory": {
            "summary": "Ad management, social media support, marketing advice, and growth-oriented advisory.",
            "starting_price": "Rs 29,999",
        },
    },
    "projects": [
        "College Website",
        "Portfolio Website",
        "Modern Portfolio Website",
        "Raj Heights Global",
    ],
    "social": ["Instagram", "GitHub Community", "LinkedIn", "X / Twitter"],
}


INTENT_EXAMPLES = [
    IntentExample("greeting", "hi"),
    IntentExample("greeting", "hello"),
    IntentExample("greeting", "hey"),
    IntentExample("greeting", "hay"),
    IntentExample("greeting", "hii"),
    IntentExample("greeting", "helo"),
    IntentExample("services_overview", "what services do you offer"),
    IntentExample("services_overview", "tell me about your services"),
    IntentExample("services_overview", "what can thecodex build"),
    IntentExample("services_overview", "which services are available"),
    IntentExample("pricing", "what are your prices"),
    IntentExample("pricing", "tell me pricing"),
    IntentExample("pricing", "i want to know about costings"),
    IntentExample("pricing", "what is the cost"),
    IntentExample("pricing", "how much do you charge"),
    IntentExample("pricing", "budget range for website"),
    IntentExample("contact", "how can i contact you"),
    IntentExample("contact", "what is your phone number"),
    IntentExample("contact", "email address"),
    IntentExample("contact", "whatsapp number"),
    IntentExample("about_company", "tell me about your company"),
    IntentExample("about_company", "who is the founder"),
    IntentExample("about_company", "where are you based"),
    IntentExample("about_company", "who are you"),
    IntentExample("projects", "show me your projects"),
    IntentExample("projects", "what projects are on the website"),
    IntentExample("projects", "do you have portfolio examples"),
    IntentExample("inquiry_flows", "which form should i use"),
    IntentExample("inquiry_flows", "what is the difference between buy service and start project"),
    IntentExample("inquiry_flows", "how do i start a project"),
    IntentExample("inquiry_flows", "when should i use custom request"),
    IntentExample("legal", "do you have privacy policy"),
    IntentExample("legal", "show me terms and conditions"),
    IntentExample("legal", "legal pages"),
    IntentExample("service_development", "tell me about website development"),
    IntentExample("service_development", "do you build apps"),
    IntentExample("service_development", "development solutions"),
    IntentExample("service_ai", "tell me about ai automation"),
    IntentExample("service_ai", "do you build ai tools"),
    IntentExample("service_ai", "ai integration and automation"),
    IntentExample("service_infra", "network setup service"),
    IntentExample("service_infra", "server and infrastructure"),
    IntentExample("service_infra", "infrastructure and computation"),
    IntentExample("service_growth", "marketing support"),
    IntentExample("service_growth", "growth and advisory"),
    IntentExample("service_growth", "social media and ads"),
]


def build_response(intent: str, user_message: str) -> str:
    knowledge = WEBSITE_KNOWLEDGE

    if intent == "greeting":
        return (
            "Hey, welcome to TheCOdex. Tell me what you want to build, improve, or launch, "
            "and I will guide you from the website's services and project flows."
        )

    if intent == "services_overview":
        service_names = ", ".join(knowledge["services"].keys())
        return (
            f"The main service areas are {service_names}. We cover websites, apps, AI automation, "
            "infrastructure, and growth support. If you tell me your goal, I can narrow down the best category."
        )

    if intent == "pricing":
        return (
            "The website shows structured starting plans. Development Solutions starts at Rs 14,999, "
            "AI Integration & Automation starts at Rs 19,999, and Infrastructure plus Growth support start at Rs 29,999. "
            "If you tell me what kind of project you have, I can point you to the closest range."
        )

    if intent == "contact":
        return (
            f"You can contact {knowledge['company']} by email at {knowledge['email']} or by phone and WhatsApp on "
            f"{knowledge['phone']}. The location shown on the website is {knowledge['location']}."
        )

    if intent == "about_company":
        return (
            f"{knowledge['company']} is based in {knowledge['location']}. The founder is {knowledge['founder']}, "
            "and the site presents the company as a team focused on websites, applications, AI workflows, "
            "infrastructure, and practical growth support."
        )

    if intent == "projects":
        return (
            "The Projects page shows live previews of work such as "
            + ", ".join(knowledge["projects"])
            + ". Visitors can explore real deployed websites directly from the page."
        )

    if intent == "inquiry_flows":
        flows = knowledge["inquiry_flows"]
        return (
            f"{flows['buy-service']} {flows['custom-request']} {flows['start-project']} {flows['maintenance-support']}"
        )

    if intent == "legal":
        return (
            "Yes, the website includes both Privacy Policy and Terms & Conditions pages with company details, "
            "contact information, founder information, signature, and update dates."
        )

    if intent == "service_development":
        service = knowledge["services"]["development solutions"]
        return (
            f"Development Solutions covers {service['summary']} The starting visible plan is {service['starting_price']}."
        )

    if intent == "service_ai":
        service = knowledge["services"]["ai integration & automation"]
        return (
            f"AI Integration & Automation covers {service['summary']} The starting visible plan is {service['starting_price']}."
        )

    if intent == "service_infra":
        service = knowledge["services"]["infrastructure & computation"]
        return (
            f"Infrastructure & Computation covers {service['summary']} The starting visible plan is {service['starting_price']}."
        )

    if intent == "service_growth":
        service = knowledge["services"]["growth, marketing & advisory"]
        return (
            f"Growth, Marketing & Advisory covers {service['summary']} The starting visible plan is {service['starting_price']}."
        )

    return (
        "I can answer questions about TheCOdex services, pricing, projects, inquiry forms, contact details, "
        "company profile, and legal pages. Ask me something specific about the website and I will answer clearly."
    )
