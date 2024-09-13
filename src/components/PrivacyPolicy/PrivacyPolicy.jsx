import MetaData from "../Layouts/MetaData"

const PrivacyPolicy = () => {
    return(
        <>
            <MetaData
                title={"Privacy Policy - Simulacrum Solutions"}
            />

            <section className="privacy-policy-section py-10 md:py-20 px-3">
                <div className='flex flex-col md:max-w-6xl mx-auto gap-5 text-primary-grey shadow-all shadow-gray-300 p-5 md:p-10'>
                    <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient mx-auto">Privacy Policy</h3>
                    <p>Effective Date: 22-08-2024</p>


                    <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">1. Introduction</h4>
                    <p>Welcome to Simulacrum. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.</p>


                    <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">2. Information We Collect</h4>
                    <p><b>Personal Information:</b> We may collect personal data such as your name, email address, phone number, and any other information you provide when you interact with our website.</p>
                    <p><b>Usage Data:</b> We automatically collect data on how you use our website, including IP addresses, browser types, pages visited, and the time and date of your visit.</p>
                    <p><b>Cookies and Tracking Technologies:</b> We use cookies and similar tracking technologies to enhance your experience on our website and analyze website traffic.</p>


                    <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">3. How We Use Your Information</h4>
                    <p><b>Service Delivery:</b> To provide and manage our services, including customer support and responding to inquiries.</p>
                    <p><b>Improvement:</b> To improve and personalize our website based on your feedback and usage patterns.</p>
                    <p><b>Marketing:</b> With your consent, we may use your contact information to send you newsletters, promotional materials, or other communications.</p>
                    <p><b>Compliance:</b> To comply with legal obligations or protect the rights and safety of our users and the public.</p>


                    <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">4. Sharing Your Information</h4>
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to fulfill our services or comply with legal requirements.</p>


                    <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">5. Data Security</h4>
                    <p>We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of data transmission over the internet is 100% secure.</p>


                    <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">6. Your Rights</h4>
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside">
                        <li>Access the personal information we hold about you.</li>
                        <li>Request correction or deletion of your personal data.</li>
                        <li>Withdraw your consent for data processing at any time.</li>
                        <li>Object to the processing of your data for direct marketing purposes.</li>
                    </ul>


                    <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">7. Third-Party Links</h4>
                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any site you visit.</p>


                    <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">8. Changes to This Privacy Policy</h4>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website with the updated effective date.</p>


                    <h4 className="w-fit text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-primary-darkBlue font-semibold text-gradient">9. Contact Us</h4>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                    <p>Email: <a href="mailto:contact@simulacrumsolutions.com" className="text-primary-darkBlue">contact@simulacrumsolutions.com</a></p>
                    <p>Phone: <a href="tel:+919915841204" className="text-primary-darkBlue">+91 9915841204</a></p>
                    {/* <p>Address: SCO 30, First Floor, Near Devaji Plaza, VIP Road, Zirakpur, PB (India)</p> */}

                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy