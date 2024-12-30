const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">Contact</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded" required></textarea>
          </div>
          <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

