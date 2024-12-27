import Header from "@/components/Header";

// src/pages/contact.tsx
export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className="w-full p-2 border rounded-md h-32"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Foodie Street<br />
                  Cuisine City, CC 12345
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@tastykrafts.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 10:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 11:00 AM - 11:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}