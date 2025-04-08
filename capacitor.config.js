
const config = {
  appId: 'app.lovable.462ef6b092184070a183fdaaaebcdabb',
  appName: 'saloon-booking-buddy',
  webDir: 'dist',
  server: {
    url: 'https://462ef6b0-9218-4070-a183-fdaaaebcdabb.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#FFF4F2",
      androidSplashResourceName: "splash",
      splashFullScreen: true,
      splashImmersive: true
    }
  }
};

export default config;
