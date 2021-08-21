import '../library/import-library-content.js';
export const config = {
    commandPrefix: '+'
};

//Eh well you can delete the stuff at the bottom whenever you want lol
//This will just execute once the world has loaded
import { Server, setTickTimeout } from '../library/Minecraft.js';

setTickTimeout(() => {
    Server.broadcast(`§bWelcome to the starter pack! \nThis pack contains A LOT of stuff for you to use. Content includes: custom commands, cool utils and a lot more!\nFor more information read the DOCS inside the pack!\n§eDo you need help? Join this Discord server: §fhttps://discord.gg/KyN24Mq73w\n\n§eGameTest FrameWork API Starter Pack§r\n§bCredit: §rThis pack was made by §anotbeer\n§9Discord: §fnotbeer#9204\n§aXbox Live: §fColoringEmy86`);
}, 500);