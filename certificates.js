const certificates = [
  { name: "AWS Certified Cloud Practitioner (CLF-C01)", icon: "certs_icons/Amazon_Web_Services_Logo.svg.png" },
  { name: "AWS Certified Data Engineer - Associate (DEA-C01)", icon: "certs_icons/aws.png" },
  { name: "Rice University: Principles of Computing (Part 1 and 2)", icon: "certs_icons/coursera.png" },
  { name: "Master's degree from University of Potsdam", icon: "certs_icons/Uni-Potsdam_Logo_klein.png" },
  { name: "The Bachelor Honours Degree from  Kazakh National university", icon: "certs_icons/kaznu.png" },
];

function renderCertificates() {
  const container = document.getElementById("certificatesContainer");
  const section = document.createElement("div");
  section.className = "certificates-section"; // Ensure the correct class is used
  section.style.display = "flex"; // Add this line to make the section a flex container
  section.style.justifyContent = "center"; // Add this line to center the section horizontally

  const iconsContainer = document.createElement("div");
  iconsContainer.className = "icons-container";
  iconsContainer.style.display = "flex"; // Add this line to make the container a flex container
  iconsContainer.style.justifyContent = "center"; // Center the icons container horizontally

  certificates.forEach(cert => {
    const certWrapper = document.createElement("div");
    certWrapper.className = "skill-wrapper";

    const icon = document.createElement("img");
    icon.src = cert.icon;
    icon.alt = cert.name;
    icon.title = cert.name;
    icon.className = "skill-icon";

    const label = document.createElement("span");
    label.textContent = cert.name;
    label.className = "skill-label";

    certWrapper.appendChild(icon);
    certWrapper.appendChild(label);
    iconsContainer.appendChild(certWrapper);
  });

  section.appendChild(iconsContainer);
  container.appendChild(section);
}

document.addEventListener("DOMContentLoaded", renderCertificates);
