"use client";

import React from 'react';
import Autocomplete from 'react-google-autocomplete';

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

const ContactHero = () => {
  const inputStyle = "w-full bg-black border-2 border-blue-600 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all";
  const labelStyle = "block text-white font-bold mb-2 uppercase text-sm tracking-wide";

  return (
    /* Added 'relative' and 'z-10' to force this layer above the fixed background */
    <section className="relative z-10 bg-black min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Let's Build the Future Together
        </h1>
        <p className="text-blue-400 text-lg">Reach out for a consultation or a quick quote.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Changed bg-zinc-900/50 to bg-zinc-900 (Solid) to prevent transparency */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl text-white font-bold mb-6">General Inquiry</h2>
          <form action="/api/send" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className={labelStyle}>Full Name</label>
              <input type="text" name="name" className={inputStyle} required />
            </div>
            <div className="md:col-span-2">
              <label className={labelStyle}>Company</label>
              <input type="text" name="company" className={inputStyle} />
            </div>
            <div className="md:col-span-2">
              <label className={labelStyle}>Address (Auto-complete)</label>
              <Autocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                onPlaceSelected={(place) => console.log(place)}
                className={inputStyle}
                options={{ types: ["address"] }}
              />
            </div>
            <div>
              <label className={labelStyle}>City</label>
              <input type="text" name="city" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>State</label>
              <select name="state" className={inputStyle}>
                {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className={labelStyle}>Zip Code</label>
              <input type="text" name="zip" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Email</label>
              <input type="email" name="email" className={inputStyle} required />
            </div>
            <button className="md:col-span-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Changed bg-zinc-900/50 to bg-zinc-900 (Solid) */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl text-white font-bold mb-6">Quick Load Quote</h2>
          <form action="/api/quote" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Origin City</label>
              <input type="text" name="originCity" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Origin State</label>
              <select name="originState" className={inputStyle}>
                {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className={labelStyle}>Dest. City</label>
              <input type="text" name="destCity" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Dest. State</label>
              <select name="destState" className={inputStyle}>
                {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className={labelStyle}>Ready Date</label>
              <input type="date" name="readyDate" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Ready Time</label>
              <input type="time" name="readyTime" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Delivery Date</label>
              <input type="date" name="deliveryDate" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Delivery Time</label>
              <input type="time" name="deliveryTime" className={inputStyle} />
            </div>
            <div className="md:col-span-2">
              <label className={labelStyle}>Commodity</label>
              <input type="text" name="commodity" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Price ($)</label>
              <input type="number" name="price" className={inputStyle} />
            </div>
            <div>
              <label className={labelStyle}>Weight (lbs)</label>
              <input type="number" name="weight" className={inputStyle} />
            </div>
            <button className="md:col-span-2 mt-4 bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-lg transition-colors">
              Get Quick Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;