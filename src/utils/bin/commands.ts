// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `SELECT A PROMPT, INVESTIGATE THE VIRUS, AND HUNT FOR THE KEY TO SURVIVAL:
\n${c}\n
TYPE 'CLEAR' TO CLEAR THE TERMINAL
TYPE 'VIRUS' TO DISPLAY CRUCIAL INFORMATION.
`;
};


// // Redirection
// export const repo = async (args: string[]): Promise<string> => {
//   window.open(`${config.repo}`);
//   return 'Opening Github repository...';
// };

// About
export const about = async (args: string[]): Promise<string> => {
  return `
  <pre>
  ${config.name}.

  IN THE SHADOW OF A SINISTER OUTBREAK, A MONSTROUS WAVE
  OF MUTATION SWEEPS ACROSS THE GLOBE, GIVING RISE TO "THE VIRUS".

  JOIN THE RANKS OF THE INFECTED BY MINTING ONE OF THE 2,000 UNIQUE 
  'PATIENTS'. AS A PATIENT, YOU'LL POSSESS A MONSTROUS CREATURE
  WITH DISTINCT TRAITS. A LIVING TESTAMENT TO THE RELENTLESS SPREAD
  OF THIS VIRAL PHENOMENON.

  NO DISCORD & NO ROADMAP; OUR SCIENTISTS FEAR FOR THEIR LIVES AND ARE TOO
  OCCUPIED WITH FRANTICLY SEARCHING FOR A CURE. STAY TUNED TO OUR <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.twitter}" target="_blank">TWITTER</a></u>
  FOR CRITICAL UPDATES AS HUMANITY TEETERS ON THE BRINK OF CHAOS. 
  
  THE VIRUS IS WAITING – WILL YOU JOIN THE CONTAGION?
  </pre>
  `;
};


// TEAM
export const team = async (args: string[]): Promise<string> => {
  return `3 Scientists are responsible for this outbreak. 

- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">AN3MBO</a></u>

- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">UNCLE3D</a></u>

- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.acid}" target="_blank">4C1D1M4G1N4T1V3</a></u>

`;
};

//VIRUS
export const virus = async (args: string[]): Promise<string> => {
  return ` ${config.name}. 

  THE VIRUS, CREATED BY THREE BRILLIANT SCIENTISTS, WAS A MUTATIVE 
  VIRUS THAT PROMISED TO ENHANCE HUMAN ABILITIES BEYOND IMAGINATION. 
  BUT IT WAS RISKY, ILLEGAL, AND ITS ESCAPE FROM THE LAB PUT HUMANITY 
  AT RISK. THE SCIENTISTS DESPERATELY WORKED ON A CURE, AS 2,000 VOLUNTEERS 
  WERE CALLED UPON TO CONTAIN THE POWERFUL MONSTERS THAT HAD ESCAPED. 
  THE FATE OF HUMANITY HUNG IN THE BALANCE AS A FEW BRAVE SOULS RACED 
  AGAINST TIME TO STOP THE VIRUS.
`;
};


// SNEAKPEEK
export const sneakpeek = async (args: string[]): Promise<string> => {
  window.open(`${config.social.opensea}`);
  return 'redirecting to twitter';
};

// MINT
export const mint = async (args: string[]): Promise<string> => {
  return ` ${config.name}. 
  
  MINTING - LATE MAY 2023
  MINT PRICE - 0.005
  TOTAL'PATIENTS' - 2,000
  MAX PER TRANSACTION - 10
  MINT LINK - COME BACK HERE TO MINT
 `;
};

//   //MINT LINK OPEN TO NEW PAGE - LATER
// export const mint = async (args: string[]): Promise<string> => {
//   window.open(`${config.social.opensea}`);
//   return 'redirecting to mint page (...coming soon...)';
// };

// CIPHER
export const cipher = async (args: string[]): Promise<string> => {
  return ` ${config.name}. 
  <pre>
   ARE YOU BRAVE ENOUGH TO TAKE ON THE CHALLENGE? A CIPHER LIES HIDDEN
   WITHIN OUR WEBSITE, WAITING TO BE SOLVED. BUT THIS IS NO ORDINARY GAME. 
   THE CIPHER HOLDS THE KEY TO FINDING THE CURE FOR "THE VIRUS". 
   
   THOSE WHO SUCCESSFULLY CRACK IT, WILL BE GRANTED ACCESS TO THE QUARANTINED ZONE. 
   SO, ARE YOU READY TO TAKE ON THE CHALLENGE AND HELP US PUT AN END TO "THE VIRUS" 
   ONCE AND FOR ALL?
   -YOU'LL KNOW ONCE YOU'VE FOUND IT ...
  <pre>
  `;
  };

// export const resume = async (args: string[]): Promise<string> => {
//   window.open(`${config.resume_url}`);
//   return 'Opening resume...';
// };

// // Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// // Contact
// export const email = async (args: string[]): Promise<string> => {
//   window.open(`mailto:${config.email}`);
//   return `Opening mailto:${config.email}...`;
// };

// export const github = async (args: string[]): Promise<string> => {
//   window.open(`https://github.com/${config.social.github}/`);

//   return 'Opening github...';
// };

// export const linkedin = async (args: string[]): Promise<string> => {
//   window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

//   return 'Opening linkedin...';
// };

// // Search
// export const google = async (args: string[]): Promise<string> => {
//   window.open(`https://google.com/search?q=${args.join(' ')}`);
//   return `Searching google for ${args.join(' ')}...`;
// };

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// // Typical linux commands
// export const echo = async (args: string[]): Promise<string> => {
//   return args.join(' ');
// };

// export const whoami = async (args: string[]): Promise<string> => {
//   return `${config.ps1_username}`;
// };

// export const ls = async (args: string[]): Promise<string> => {
//   return `a
// bunch
// of
// fake
// directories`;
// };

// export const cd = async (args: string[]): Promise<string> => {
//   return `unfortunately, i cannot afford more directories.
// if you want to help, you can type 'donate'.`;
// };

// export const date = async (args: string[]): Promise<string> => {
//   return new Date().toString();
// };

// export const vi = async (args: string[]): Promise<string> => {
//   return `woah, you still use 'vi'? just try 'vim'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `'vim' is so outdated. how about 'nvim'?`;
// };

// export const nvim = async (args: string[]): Promise<string> => {
//   return `'nvim'? too fancy. why not 'emacs'?`;
// };

// export const emacs = async (args?: string[]): Promise<string> => {
//   return `you know what? just use vscode.`;
// };

// export const sudo = async (args?: string[]): Promise<string> => {
//   window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
//   return `Permission denied: with little power comes... no responsibility? `;
// };

// Banner Component
export const banner = (args?: string[]): string => {
  return `
    <div style="display: flex; align-items: center; justify-content: flex-start;">
      <Image src="/logosmall.png" width={180} height={180} layout="responsive" style={{ marginRight: '2em' }} />
      <pre>
        ████████╗██╗  ██╗███████╗    ██╗   ██╗██╗██████╗ ██╗   ██╗███████╗
        ╚══██╔══╝██║  ██║██╔════╝    ██║   ██║██║██╔══██╗██║   ██║██╔════╝
           ██║   ███████║█████╗      ██║   ██║██║██████╔╝██║   ██║███████╗
           ██║   ██╔══██║██╔══╝      ╚██╗ ██╔╝██║██╔══██╗██║   ██║╚════██║
           ██║   ██║  ██║███████╗     ╚████╔╝ ██║██║  ██║╚██████╔╝███████║
           ╚═╝   ╚═╝  ╚═╝╚══════╝      ╚═══╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
     
    TYPE 'HELP' TO DIVE DEEPER:
    TYPE 'SUMFETCH' TO DISPLAY CRUCIAL SURVIVAL INFORMATION
    TYPE 'MINT' OR CLICK  <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.social.opensea}" target="_blank">HERE</a></u> FOR THE MINT PAGE (COMING SOON...)
    `;
};
