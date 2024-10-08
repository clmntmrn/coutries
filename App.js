import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

//a
import AF from "./assets/svg/af.svg";
import AL from "./assets/svg/al.svg";
import DZ from "./assets/svg/dz.svg";
import AD from "./assets/svg/ad.svg";
import AO from "./assets/svg/ao.svg";
import AG from "./assets/svg/ag.svg";
import AR from "./assets/svg/ar.svg";
import AM from "./assets/svg/am.svg";
import AU from "./assets/svg/au.svg";
import AT from "./assets/svg/at.svg";
import AZ from "./assets/svg/az.svg";
//b
import BS from "./assets/svg/bs.svg";
import BH from "./assets/svg/bh.svg";
import BD from "./assets/svg/bd.svg";
import BB from "./assets/svg/bb.svg";
import BY from "./assets/svg/by.svg";
import BE from "./assets/svg/be.svg";
import BZ from "./assets/svg/bz.svg";
import BJ from "./assets/svg/bj.svg";
import BT from "./assets/svg/bt.svg";
import BO from "./assets/svg/bo.svg";
import BA from "./assets/svg/ba.svg";
import BW from "./assets/svg/bw.svg";
import BR from "./assets/svg/br.svg";
import BN from "./assets/svg/bn.svg";
import BG from "./assets/svg/bg.svg";
import BF from "./assets/svg/bf.svg";
import BI from "./assets/svg/bi.svg";
//c
import CV from "./assets/svg/cv.svg";
import KH from "./assets/svg/kh.svg";
import CM from "./assets/svg/cm.svg";
import CA from "./assets/svg/ca.svg";
import CF from "./assets/svg/cf.svg";
import TD from "./assets/svg/td.svg";
import CL from "./assets/svg/cl.svg";
import CN from "./assets/svg/cn.svg";
import CO from "./assets/svg/co.svg";
import KM from "./assets/svg/km.svg";
import CG from "./assets/svg/cg.svg";
import CR from "./assets/svg/cr.svg";
import CI from "./assets/svg/ci.svg";
import HR from "./assets/svg/hr.svg";
import CU from "./assets/svg/cu.svg";
import CY from "./assets/svg/cy.svg";
import CZ from "./assets/svg/cz.svg";
//d
import KP from "./assets/svg/kp.svg";
import CD from "./assets/svg/cd.svg";
import DK from "./assets/svg/dk.svg";
import DJ from "./assets/svg/dj.svg";
import DM from "./assets/svg/dm.svg";
import DO from "./assets/svg/do.svg";
//e
import EC from "./assets/svg/ec.svg";
import EG from "./assets/svg/eg.svg";
import SV from "./assets/svg/sv.svg";
import GQ from "./assets/svg/gq.svg";
import ER from "./assets/svg/er.svg";
import EE from "./assets/svg/ee.svg";
import SZ from "./assets/svg/sz.svg";
import ET from "./assets/svg/et.svg";
//f
import FJ from "./assets/svg/fj.svg";
import FI from "./assets/svg/fi.svg";
import FR from "./assets/svg/fr.svg";
//g
import GA from "./assets/svg/ga.svg";
import GM from "./assets/svg/gm.svg";
import GE from "./assets/svg/ge.svg";
import DE from "./assets/svg/de.svg";
import GH from "./assets/svg/gh.svg";
import GR from "./assets/svg/gr.svg";
import GD from "./assets/svg/gd.svg";
import GT from "./assets/svg/gt.svg";
import GN from "./assets/svg/gn.svg";
import GW from "./assets/svg/gw.svg";
import GY from "./assets/svg/gy.svg";
//h
import HT from "./assets/svg/ht.svg";
import HN from "./assets/svg/hn.svg";
import HU from "./assets/svg/hu.svg";
//i
import IS from "./assets/svg/is.svg";
import IN from "./assets/svg/in.svg";
import ID from "./assets/svg/id.svg";
import IR from "./assets/svg/ir.svg";
import IQ from "./assets/svg/iq.svg";

// Exemple de données
const flagsData = [
	{
		isoCode: "af",
		country: "Afghanistan",
		flag: AF,
	},
	{
		isoCode: "al",
		country: "Albania",
		flag: AL,
	},
	{
		isoCode: "dz",
		country: "Algeria",
		flag: DZ,
	},
	{
		isoCode: "ad",
		country: "Andorra",
		flag: AD,
	},
	{
		isoCode: "ao",
		country: "Angola",
		flag: AO,
	},
	{
		isoCode: "ag",
		country: "Angola",
		flag: AG,
	},
	{
		isoCode: "ar",
		country: "Argentina",
		flag: AR,
	},
	{
		isoCode: "am",
		country: "Armenia",
		flag: AM,
	},
	{
		isoCode: "au",
		country: "Australia",
		flag: AU,
	},
	{
		isoCode: "at",
		country: "Austria",
		flag: AT,
	},
	{
		isoCode: "az",
		country: "Azerbaijan",
		flag: AZ,
	},

	// b

	{
		isoCode: "bs",
		country: "Bahamas",
		flag: BS,
	},
	{
		isoCode: "bh",
		country: "Bahrain",
		flag: BH,
	},
	{
		isoCode: "bd",
		country: "Bangladesh",
		flag: BD,
	},
	{
		isoCode: "bb",
		country: "Barbados",
		flag: BB,
	},
	{
		isoCode: "by",
		country: "Belarus",
		flag: BY,
	},
	{
		isoCode: "be",
		country: "Belgium",
		flag: BE,
	},
	{
		isoCode: "bz",
		country: "Belize",
		flag: BZ,
	},
	{
		isoCode: "bj",
		country: "Benin",
		flag: BJ,
	},
	{
		isoCode: "bt",
		country: "Bhutan",
		flag: BT,
	},
	{
		isoCode: "bo",
		country: "Bolivia",
		flag: BO,
	},
	{
		isoCode: "ba",
		country: "Bosnia and Herzegovina",
		flag: BA,
	},
	{
		isoCode: "bw",
		country: "Botswana",
		flag: BW,
	},
	{
		isoCode: "br",
		country: "Brazil",
		flag: BR,
	},
	{
		isoCode: "bn",
		country: "Brunei Darussalam",
		flag: BN,
	},
	{
		isoCode: "bg",
		country: "Bulgaria",
		flag: BG,
	},
	{
		isoCode: "bf",
		country: "Burkina Faso",
		flag: BF,
	},
	{
		isoCode: "bi",
		country: "Burundi",
		flag: BI,
	},

	// c

	{
		isoCode: "cv",
		country: "Cabo Verde",
		flag: CV,
	},
	{
		isoCode: "kh",
		country: "Cambodia",
		flag: KH,
	},
	{
		isoCode: "cm",
		country: "Cameroon",
		flag: CM,
	},
	{
		isoCode: "ca",
		country: "Canada",
		flag: CA,
	},
	{
		isoCode: "cf",
		country: "Central African Republic",
		flag: CF,
	},
	{
		isoCode: "td",
		country: "Chad",
		flag: TD,
	},
	{
		isoCode: "cl",
		country: "Chile",
		flag: CL,
	},
	{
		isoCode: "cn",
		country: "China",
		flag: CN,
	},
	{
		isoCode: "co",
		country: "Colombia",
		flag: CO,
	},
	{
		isoCode: "km",
		country: "Comoros",
		flag: KM,
	},
	{
		isoCode: "cg",
		country: "Congo",
		flag: CG,
	},
	{
		isoCode: "cr",
		country: "Costa Rica",
		flag: CR,
	},
	{
		isoCode: "ci",
		country: "Côte d'Ivoire",
		flag: CI,
	},
	{
		isoCode: "hr",
		country: "Croatia",
		flag: HR,
	},
	{
		isoCode: "cu",
		country: "Cuba",
		flag: CU,
	},
	{
		isoCode: "cy",
		country: "Cyprus",
		flag: CY,
	},
	{
		isoCode: "cz",
		country: "Czechia",
		flag: CZ,
	},

	// d

	{
		isoCode: "kp",
		country: "North Korea",
		fulleName: "Democratic People's Republic of Korea",
		flag: KP,
	},
	{
		isoCode: "cd",
		country: "Democratic Republic of the Congo",
		flag: CD,
	},
	{
		isoCode: "dk",
		country: "Denmark",
		flag: DK,
	},
	{
		isoCode: "dj",
		country: "Djibouti",
		flag: DJ,
	},
	{
		isoCode: "dm",
		country: "Dominica",
		flag: DM,
	},
	{
		isoCode: "do",
		country: "Dominican Republic",
		flag: DO,
	},

	// e

	{
		isoCode: "ec",
		country: "Ecuador",
		flag: EC,
	},
	{
		isoCode: "eg",
		country: "Egypt",
		flag: EG,
	},
	{
		isoCode: "sv",
		country: "El Salvador",
		flag: SV,
	},
	{
		isoCode: "gq",
		country: "Equatorial Guinea",
		flag: GQ,
	},
	{
		isoCode: "er",
		country: "Eritrea",
		flag: ER,
	},
	{
		isoCode: "ee",
		country: "Estonia",
		flag: EE,
	},
	{
		isoCode: "sz",
		country: "Eswatini",
		flag: SZ,
	},
	{
		isoCode: "et",
		country: "Ethiopia",
		flag: ET,
	},

	// f

	{
		isoCode: "fj",
		country: "Fiji",
		flag: FJ,
	},
	{
		isoCode: "fi",
		country: "Finland",
		flag: FI,
	},
	{
		isoCode: "fr",
		country: "France",
		flag: FR,
	},

	// g

	{
		isoCode: "ga",
		country: "Gabon",
		flag: GA,
	},
	{
		isoCode: "gm",
		country: "Gambia",
		flag: GM,
	},
	{
		isoCode: "ge",
		country: "Georgia",
		flag: GE,
	},
	{
		isoCode: "de",
		country: "Germany",
		flag: DE,
	},
	{
		isoCode: "gh",
		country: "Ghana",
		flag: GH,
	},
	{
		isoCode: "gr",
		country: "Greece",
		flag: GR,
	},
	{
		isoCode: "gd",
		country: "Grenada",
		flag: GD,
	},
	{
		isoCode: "gt",
		country: "Guatemala",
		flag: GT,
	},
	{
		isoCode: "gn",
		country: "Guinea",
		flag: GN,
	},
	{
		isoCode: "gw",
		country: "Guinea Bissau",
		flag: GW,
	},
	{
		isoCode: "gy",
		country: "Guyana",
		flag: GY,
	},

	// h

	{
		isoCode: "ht",
		country: "Haiti",
		flag: HT,
	},
	{
		isoCode: "hn",
		country: "Honduras",
		flag: HN,
	},
	{
		isoCode: "hu",
		country: "Hungary",
		flag: HU,
	},

	// i

	{
		isoCode: "is",
		country: "Iceland",
		flag: IS,
	},
	{
		isoCode: "in",
		country: "India",
		flag: IN,
	},
	{
		isoCode: "id",
		country: "Indonesia",
		flag: ID,
	},
	{
		isoCode: "ir",
		country: "Iran",
		flag: IR,
	},
	{
		isoCode: "iq",
		country: "Iraq",
		flag: IQ,
	},
];

// Composant pour rendre chaque drapeau
const FlagItem = ({ country, FlagSvgComponent }) => {
	return (
		<View style={styles.itemContainer}>
			<Text style={styles.countryText}>{country}</Text>
			<View style={styles.flagContainer}>
				{/* Rendu du composant SVG directement */}
				<FlagSvgComponent width="100" height="60" />
			</View>
		</View>
	);
};

const App = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={flagsData}
				keyExtractor={(item) => item.isoCode}
				renderItem={({ item }) => (
					<FlagItem country={item.country} FlagSvgComponent={item.flag} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 20,
	},
	itemContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
	},
	flagContainer: {
		marginLeft: 20,
	},
	countryText: {
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default App;
