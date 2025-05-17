import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-foreground/80">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6 ">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex  items-center  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-left">Email</h4>
                  <a
                    href="mailto:godswillogbodu42@gmail.com"
                    className="text-primary-foreground hover:text-primary transition-colors"
                  >
                    godswillogbodu42@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex  items-center  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-left">Email</h4>
                  <a
                    href="tel:+2349032980552"
                    className="text-primary-foreground hover:text-primary transition-colors"
                  >
                    (234) 9032980552
                  </a>
                </div>
              </div>
              <div className="flex  items-center  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-left">Location</h4>
                  <a className="text-primary-foreground hover:text-primary transition-colors">
                    Rivers State, Nigeria
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4">
              {/*  */}
              <h4 className="font-medium mb-4">Connect with me </h4>
              <div className="flex space-x-4 justify-center">
                {/* Whatsapp */}
                <a href="https://wa.me/+2349032980552" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </a>

                {/* <Linkedin /> */}
                <a href="" target="_blank">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="" target="_blank">
                  <Twitter />
                </a>
                <a href="" target="_blank">
                  <Facebook />
                </a>
                <a href="" target="_blank">
                  <Instagram />
                </a>
                <a href="" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
