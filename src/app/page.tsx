'use client';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Button, Typography, Box } from '@mui/material';

export default function Home() {
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    alert(`Welcome ${result.user.displayName}`);
  };

  return (
    <Box textAlign="center" className='justify-center items-center h-[100vh] content-center' mt={5}>
      <Typography variant="h4">Google Sign-In</Typography>
      <Button variant="contained" onClick={signIn} sx={{ mt: 2 }}> 
        Sign In with Google
      </Button>
    </Box>
  );
}
