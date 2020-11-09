/*!
 * Ant1pattern Webpage
 *
 * Copyright (c) 2020, ANT1pattern <ant1pattern@protonmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
import './src/styles.scss';
import { terminal } from './src/terminal.js';

// Banner text
const banner = `
Initializing ANT1pattern Shell v0.1
Copyright (c) 2020 Ant1pattern <ant1pattern@protonmail.com>

.............................................................................
 
 _______  _______  _______  _______ 
|\\     /||\\     /||\\     /||\\     /|
| +---+ || +---+ || +---+ || +---+ |
| |   | || |   | || |   | || |   | |
| |A  | || |N  | || |T  | || |1  | |
| +---+ || +---+ || +---+ || +---+ |
|/_____\\||/_____\\||/_____\\||/_____\\|
                                    
_______  _______  _______  _______  _______  _______  _______ 
|\\     /||\\     /||\\     /||\\     /||\\     /||\\     /||\\     /|
| +---+ || +---+ || +---+ || +---+ || +---+ || +---+ || +---+ |
| |   | || |   | || |   | || |   | || |   | || |   | || |   | |
| |p  | || |a  | || |t  | || |t  | || |e  | || |r  | || |n  | |
| +---+ || +---+ || +---+ || +---+ || +---+ || +---+ || +---+ |
|/_____\\||/_____\\||/_____\\||/_____\\||/_____\\||/_____\\||/_____\\|
-----------------------------------------------------------------------------
We provide the skills you need to ship your web3 product!
-----------------------------------------------------------------------------


Type 'help for a list of available commands.



`;

// Help text
const helpText = `
Available commands:

help - This output
services - Prints our service offers
team - Shows team member
references - Display latest projects
contact - show contact options
contact <key> - Display latest projects
clear - Clears the display
`;

// Contact texts
const contactInfo = {
  discord: 'https://discord.gg/ywVNbvb86j',
  email: 'ant1pattern@protonmail.com',
  twitter: 'https://twitter.com/antipattern_eth',
  github: 'https://github.com/ant1pattern',
  gitcoin: 'https://gitcoin.co/grants/1159/ant1pattern',
  medium: 'https://medium.com/@ant1pattern',

};

const serviceInfo = {
  agile: "We provide the scrum master and develop the project agile.",
  consult: "We guide you through the project and show you best practices and possible risks.",
  develop: "We develop Apps, Smart Contracts, Backends and Bots.",
  quality: "We ensure quality through test of apps and smart contracts on different levels.",
  devops: "We love rapid prototyping with continious deployments.",
}

const teamInfo = {
  tosh1: 'p2p enthusiast and software engineer',
  fr1da: 'p2p enthusiast and accountant',
  rob1: 'p2p enthusiast and project manager',
  w1tt: 'graphics dude',
};

const serviceDetailInfo = {
  agile: ``,
  consult: `
  `,
  develop: ``,
  test: ``,
  devops: ``,


}

const teamDetailInfo = {
  tosh1: `

  __                 .__     ____ 
_/  |_  ____   ______|  |__ /_   |
\\   __\\/  _ \\ /  ___/|  |  \\ |   |
 |  | (  <_> )\\___ \\ |   Y  \\|   |
 |__|  \\____//____  >|___|  /|___|
                  \\/      \\/ 
                  
Infos:                  
- build already webpages on geocities (1997)
- into p2p since napster (1999)
- into bitcoin since 2012
- first own ERC20 token on Ethereum in 2016
- participated on multiple ethereum hackathons
- since 5years+ professional blockchain engineer and architect

Roles:                  
- CTO
- Hacker
- Oracle about Blockchain
  `,
  fr1da: `
    _____         ____     .___        
  _/ ____\\_______/_   |  __| _/_____   
  \\   __\\ \\_  __ \\|   | / __ | \\__  \\  
   |  |    |  | \\/|   |/ /_/ |  / __ \\_
   |__|    |__|   |___|\\____ | (____  /
                            \\/      \\/
- studied english, history and social economics
- into p2p since bittorrent (2004)
- into bitcoin since 2014
- first own ERC20 token on Ethereum in 2016
- since 5years+ professional crypto trader 


Roles:                  
- CFO
- Market Observer
- Accountant
`,
  rob1: `
                 ___.    ____ 
  _______   ____ \\_ |__ /_   |
  \\_  __ \\ /  _ \\ | __ \\ |   |
   |  | \\/(  <_> )| \\_\\ \\|   |
   |__|    \\____/ |___  /|___|
                      \\/   
- studied informatics
- into p2p since bittorrent (2004)
- into bitcoin since 2014
- participated on multiple ethereum hackathons
- since 7years+ professional project manager
- loves to hack hardware


Roles:                  
- CEO
- Project manager
`,
  w1tt: `
            ____   __     __   
  __  _  __/_   |_/  |_ _/  |_ 
  \\ \\/ \\/ / |   |\\   __\\\\   __\\
   \\     /  |   | |  |   |  |  
    \\/\\_/   |___| |__|   |__|  
                               
- father
- architect
- artist 

Roles:                  
- Graphics Dude
`

}

const contactList = Object.keys(contactInfo)
  .reduce((result, key) => result.concat([`${key} - ${contactInfo[key]} `]), [])
  .join('\n');

const teamList = Object.keys(teamInfo)
  .reduce((result, key) => result.concat([`${key} - ${teamInfo[key]} `]), [])
  .join('\n');

const serviceList = Object.keys(serviceInfo)
  .reduce((result, key) => result.concat([`${key} - ${serviceInfo[key]} `]), [])
  .join('\n');

const contactText = `
Please contact us!

${ contactList}

Use ex. 'contact twitter' to open the links.
`;

const serviceText = `
Services

${ serviceList}

Use ex. 'service develop' to open further details.
`;

const teamText = `
Team member

${ teamList}

Use ex. 'team tosh1' to open further detailss.
`;

const openTeam = key => {
  return teamDetailInfo[key]
}
const openService = key => {
  return serviceInfo[key]
}


const openContact = key => window.open(key === 'email'
  ? `mailto: ${contactInfo[key]} `
  : contactInfo[key]);

// File browser
const browser = (function () {
  let current = '/';

  let tree = [{
    location: '/',
    filename: 'documents',
    type: 'directory'
  }, {
    location: '/',
    filename: 'AUTHOR',
    type: 'file',
    content: 'Anders Evenrud <andersevenrud@gmail.com>'
  }];

  const fix = str => str.trim().replace(/\/+/g, '/') || '/';

  const setCurrent = dir => {
    if (typeof dir !== 'undefined') {
      if (dir == '..') {
        const parts = current.split('/');
        parts.pop();
        current = fix(parts.join('/'));
      } else {
        const found = tree.filter(iter => iter.location === current)
          .find(iter => iter.filename === fix(dir));

        if (found) {
          current = fix(current + '/' + dir);
        } else {
          return `Directory '${dir}' not found in '${current}'`;
        }
      }

      return `Entered '${current}'`;
    }

    return current;
  };

  const ls = () => {
    const found = tree.filter(iter => iter.location === current);
    const fileCount = found.filter(iter => iter.type === 'file').length;
    const directoryCount = found.filter(iter => iter.type === 'directory').length;
    const status = `${fileCount} file(s), ${directoryCount} dir(s)`;
    const maxlen = Math.max(...found.map(iter => iter.filename).map(n => n.length));

    const list = found.map(iter => {
      return `${iter.filename.padEnd(maxlen + 1, ' ')} <${iter.type}>`;
    }).join('\n');

    return `${list}\n\n${status} in ${current}`;
  };

  const cat = filename => {
    const found = tree.filter(iter => iter.location === current);
    const foundFile = found.find(iter => iter.filename === filename);

    if (foundFile) {
      return foundFile.content;
    }

    return `File '${filename}' not found in '${current}'`;
  };

  return {
    cwd: () => setCurrent(),
    cd: dir => setCurrent(fix(dir)),
    cat,
    ls
  };
})();

///////////////////////////////////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////////////////////////////////

const load = () => {
  const t = terminal({
    prompt: () => `$ ${browser.cwd()} > `,
    banner,
    commands: {
      help: () => helpText,
      service: (key) => {
        if (key in serviceInfo) {
          return openService(key);
        }
        return serviceText
      },
      team: (key) => {
        if (key in teamInfo) {
          return openTeam(key);
        }
        return teamText
      },
      references: (key) => {
        if (key in refInfo) {
          openContact(key);
          return `Opening ${key} - ${refInfo[key]}`;
        }
        return referenceText
      },
      clear: () => t.clear(),
      contact: (key) => {
        if (key in contactInfo) {
          openContact(key);
          return `Opening ${key} - ${contactInfo[key]}`;
        }

        return contactText;
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', load);
