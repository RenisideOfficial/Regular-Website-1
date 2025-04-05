// Props will be stored here for organization.

declare type Believe = {
    img: string;
    description: string;
}

interface NavbarRightProps {
    activeSection?: string;
}

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}