import React from 'react'
import './update.css'
function update() {
  return (
    <div>
        <div className="container-p mt-5">
        <h2>Update Contact</h2>
        <form>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
            />
            </div>
            <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select
                className="form-select"
                id="gender"
                name="gender"
                required
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            </div>
            <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                required
            />
            </div>
            <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Image URL</label>
            <input
                type="url"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                required
            />
            </div>
            <button type="submit" className="btn btn-primary">Add Contact</button>
        </form>
        </div>
    </div>
  )
}

export default update