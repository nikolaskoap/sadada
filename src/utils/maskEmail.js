
export const maskEmail = (email) => {
    if (!email) return '';
    const [name, domain] = email.split('@');
    if (!name || !domain) return email;

    const visibleStart = name.substring(0, 4); // Show first 4 chars
    // const visibleEnd = name.substring(name.length - 1); // Optional: show last char of name
    const masked = '.........'; // Fixed dots or dynamic based on length

    return `${visibleStart}${masked}@${domain}`;
};
