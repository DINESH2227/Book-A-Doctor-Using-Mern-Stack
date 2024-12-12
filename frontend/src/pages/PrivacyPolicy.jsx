import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>PRIVACY <span className="text-gray-700 font-semibold">POLICY</span></p>
      </div>

    <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
  <div className="w-full md:max-w-[360px] bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 hover:text-black transition-all duration-300 cursor-pointer">
    <p className="font-semibold text-lg text-gray-600">Privacy Policy</p>
    <p className="text-gray-500 mt-4">
      At DocOnCall, we respect your privacy and are committed to protecting it. This policy outlines our practices for collecting, using, and safeguarding your information.
    </p>
    <p className="text-gray-500 mt-4">
      DocOnCall is dedicated to maintaining the confidentiality of your health and personal information. We adhere strictly to privacy regulations to ensure that your data is handled responsibly and securely.
    </p>

    <p className="text-gray-500 mt-4">
      Our platform collects only the information necessary to provide you with a seamless and personalized healthcare experience. This may include your name, contact details, and health information relevant to scheduling appointments and managing your care.
    </p>

    <p className="text-gray-500 mt-4">
      We utilize advanced security measures, including encryption and secure servers, to protect your information. Regular audits and updates are conducted to maintain a high level of data security and prevent unauthorized access.
    </p>

    <p className="text-gray-500 mt-4">
      We believe in transparency regarding your data. You have full control over your personal information and can request access to, or deletion of, your data by contacting our support team.
    </p>

    <p className="text-gray-500 mt-4">
      As part of our commitment to quality service, we may use anonymized data for research and analytics. This helps us improve our platform while ensuring that individual privacy is always maintained.
    </p>

    <p className="text-gray-500 mt-4">
      DocOnCall does not sell or rent your personal information to third parties. Any data shared with our trusted partners is solely to support our services and is subject to strict confidentiality agreements.
    </p>

    <p className="text-gray-500 mt-4">
      You are welcome to review and update your contact preferences at any time to control how and when we communicate with you about appointments and healthcare reminders.
    </p>
  </div>


        <div className="flex flex-col justify-start items-start gap-6 text-gray-600">
          <h2 className="font-semibold text-lg">1. Information We Collect</h2>
          <p className="text-gray-500">
            We collect data such as your name, contact details, and medical information to facilitate appointment bookings and improve your experience.
          </p>

          <h2 className="font-semibold text-lg">2. How We Use Your Information</h2>
          <p className="text-gray-500">
            Your data is used to provide appointment services, communicate reminders, and offer support. We may share limited information with trusted providers to fulfill our services.
          </p>

          <h2 className="font-semibold text-lg">3. Data Security</h2>
          <p className="text-gray-500">
            DocOnCall takes data protection seriously. We use secure servers and encryption to safeguard your information, but please note that no online system is fully secure.
          </p>

          <h2 className="font-semibold text-lg">4. Cookies and Tracking</h2>
          <p className="text-gray-500">
            Our website uses cookies to enhance your experience. You can disable cookies, but this may limit some functionalities of the site.
          </p>

          <h2 className="font-semibold text-lg">5. Third-Party Services</h2>
          <p className="text-gray-500">
            We partner with third-party providers to improve our service delivery. These providers adhere to strict privacy standards, using your data only as necessary.
          </p>

          <h2 className="font-semibold text-lg">6. Your Rights</h2>
          <p className="text-gray-500">
            You have the right to access, update, or delete your personal information. Please reach out to us at support@doconcall.com to exercise your rights.
          </p>

          <h2 className="font-semibold text-lg">7. Updates to This Policy</h2>
          <p className="text-gray-500">
            We may update this policy from time to time. Changes will be posted on this page, and we encourage you to review it regularly.
          </p>

          <div className="mt-6">
            <p className="text-gray-500">
              For questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@doconcall.com" className="text-purple-500 hover:underline">support@doconcall.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy;
