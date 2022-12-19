import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label> NAME</label>
            <input type="text" required placeholder="abc" />
          </div>
          <div>
            <label> EMAIL</label>
            <input type="email" required placeholder="abc" />
          </div>
          <div>
            <label> MESSAGE</label>
            <input
              type="text"
              required
              placeholder="Tell US about your karnamas"
            />
          </div>
          <button type="Submit">SEND</button>
        </form>
      </main>
      <div />
    </div>
  );
};
export default Contact;
