import { Icon } from "@iconify/react";
import blowfishIcon from "@iconify/icons-fxemoji/blowfish";
import bearIcon from "@iconify/icons-fxemoji/bear";
import birdIcon from "@iconify/icons-fxemoji/bird";
import boarIcon from "@iconify/icons-fxemoji/boar";
import musicascendIcon from "@iconify/icons-fxemoji/musicascend";

// iconify.design/icon-sets/
const BlowfishIcon = () => <Icon icon={blowfishIcon} />;
const BearIcon = () => <Icon icon={bearIcon} />;
const BirdIcon = () => <Icon icon={birdIcon} />;
const BoarIcon = () => <Icon icon={boarIcon} />;
const NoteIcon = ({ width }) => (
  <Icon width={width} height={width} icon={musicascendIcon} />
);

export { BlowfishIcon, BearIcon, BirdIcon, BoarIcon, NoteIcon };
