import React from 'react'
import './createForm.css'

function CreateGroupForm() {

  const handleCreateGroup = async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const group_name = event.target.group_name.value;
    const group_goal = event.target.group_goal.value;
    const group_desc = event.target.group_desc.value;
    const current_user = localStorage.getItem('currentUser');
  
    try {
      const response = await fetch('http://localhost:9000/create-group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ group_name, group_goal, group_desc, current_user }),
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          window.location.href = '/';
        } else {
          console.log('unsuccessful group creation')
          alert('Unsuccessful Group Creation. Please try again.')
          window.location.href = '/create-group';
        }
      } else {
        console.log('error: network issues')
        alert('Unsuccessful Group Creation - Network Issues. Please try again.')
        window.location.href = '/create-group';
      }
    } catch (error) {
      console.error(error);
      alert('Unexpected error. Loading Homepage')
      window.location.href = '/';
    }
  };

  return (
    <div className='create-splash'>
        
        <div className='create-form'>
          <form onSubmit={handleCreateGroup} method='POST' action='/'>
            <h1 className='create-heading'>Create a New Group!</h1>

            <input type='text' name='group_name' placeholder='Group Name' className='create-input' required />
            <input type='text' name='group_goal' placeholder='Group Goal' className='create-input' required />
            <input type='text' name='group_desc' placeholder='Group Description' className='create-input' required />

            <input type='submit' />

            {/* need to sort the button to actually work. another day though */}
            <Button type='submit' buttonStyle='btn--outline'>Create Group!</Button>
            
          </form>
        </div>

    </div>
  )
}

export default CreateGroupForm
