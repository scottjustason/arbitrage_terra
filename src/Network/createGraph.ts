import Graph from "graphology";
import { tsPoolArray } from "../PoolAddresses/tsPools.js";
import { astroPoolArray } from "../PoolAddresses/astroPools.js";
import { loopPoolArray } from "../PoolAddresses/loopPools.js";

console.time('createTimer');

const graph = new Graph();

graph.addNode("UST");
graph.addNode("LUNA");
graph.addNode("bETH");
graph.addNode("ANC");
graph.addNode("KUJI");
graph.addNode("ASTRO");
graph.addNode("STT");
graph.addNode("PSI");
graph.addNode("VKR");
graph.addNode("SPEC");
graph.addNode("LOOP");
graph.addNode("MINE");
graph.addNode("LOTA");
graph.addNode("MARS");
graph.addNode("MIR");
graph.addNode("ORION");
graph.addNode("LOOPR");
graph.addNode("LUNAX");
graph.addNode("bLUNA");
graph.addNode("cLUNA");
graph.addNode("stLUNA");
graph.addNode("aUST");

graph.addUndirectedEdgeWithKey('UST-LUNA', 'UST', 'LUNA', {
    tsPairAddr: tsPoolArray[0],
    tsUSTPoolSize: 1,
    tsLUNAPoolSize: 1,
    astroPairAddr: astroPoolArray[0],
    astroUSTPoolSize: 1,
    astroLUNAPoolSize: 1,
    loopPairAddr: loopPoolArray[0],
    loopUSTPoolSize: 1,
    loopLUNAPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-bETH', 'UST', 'bETH', {
    tsPairAddr: tsPoolArray[1],
    tsUSTPoolSize: 1,
    tsbETHPoolSize: 1,
    astroPairAddr: astroPoolArray[1],
    astroUSTPoolSize: 1,
    astrobETHPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-ANC', 'UST', 'ANC', {
    tsPairAddr: tsPoolArray[2],
    tsUSTPoolSize: 1,
    tsANCPoolSize: 1,
    astroPairAddr: astroPoolArray[2],
    astroUSTPoolSize: 1,
    astroANCPoolSize: 1,
    loopPairAddr: loopPoolArray[2],
    loopUSTPoolSize: 1,
    loopANCPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-KUJI', 'UST', 'KUJI', {
    tsPairAddr: tsPoolArray[3],
    tsUSTPoolSize: 1,
    tsKUJIPoolSize: 1,
    astroPairAddr: astroPoolArray[3],
    astroUSTPoolSize: 1,
    astroKUJIPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-ASTRO', 'UST', 'ASTRO', {
    tsPairAddr: tsPoolArray[4],
    tsUSTPoolSize: 1,
    tsASTROPoolSize: 1,
    astroPairAddr: astroPoolArray[4],
    astroUSTPoolSize: 1,
    astroASTROPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-STT', 'UST', 'STT', {
    tsPairAddr: tsPoolArray[5],
    tsUSTPoolSize: 1,
    tsSTTPoolSize: 1,
    astroPairAddr: astroPoolArray[5],
    astroUSTPoolSize: 1,
    astroSTTPoolSize: 1,
    loopPairAddr: loopPoolArray[5],
    loopUSTPoolSize: 1,
    loopSTTPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-PSI', 'UST', 'PSI', {
    tsPairAddr: tsPoolArray[6],
    tsUSTPoolSize: 1,
    tsPSIPoolSize: 1,
    astroPairAddr: astroPoolArray[6],
    astroUSTPoolSize: 1,
    astroPSIPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-VKR', 'UST', 'VKR', {
    tsPairAddr: tsPoolArray[7],
    tsUSTPoolSize: 1,
    tsVKRPoolSize: 1,
    astroPairAddr: astroPoolArray[7],
    astroUSTPoolSize: 1,
    astroVKRPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-SPEC', 'UST', 'SPEC', {
    tsPairAddr: tsPoolArray[8],
    tsUSTPoolSize: 1,
    tsSPECPoolSize: 1,
    loopPairAddr: loopPoolArray[8],
    loopUSTPoolSize: 1,
    loopSPECPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-LOOP', 'UST', 'LOOP', {
    tsPairAddr: tsPoolArray[9],
    tsUSTPoolSize: 1,
    tsLOOPPoolSize: 1,
    loopPairAddr: loopPoolArray[9],
    loopUSTPoolSize: 1,
    loopLOOPPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-MINE', 'UST', 'MINE', {
    tsPairAddr: tsPoolArray[10],
    tsUSTPoolSize: 1,
    tsMINEPoolSize: 1,
    astroPairAddr: astroPoolArray[10],
    astroUSTPoolSize: 1,
    astroMINEPoolSize: 1,
    loopPairAddr: loopPoolArray[10],
    loopUSTPoolSize: 1,
    loopMINEPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-LOTA', 'UST', 'LOTA', {
    tsPairAddr: tsPoolArray[11],
    tsUSTPoolSize: 1,
    tsLOTAPoolSize: 1,
    astroPairAddr: astroPoolArray[11],
    astroUSTPoolSize: 1,
    astroLOTAPoolSize: 1,
    loopPairAddr: loopPoolArray[11],
    loopUSTPoolSize: 1,
    loopLOTAPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-MARS', 'UST', 'MARS', {
    tsPairAddr: tsPoolArray[12],
    tsUSTPoolSize: 1,
    tsMARSPoolSize: 1,
    astroPairAddr: astroPoolArray[12],
    astroUSTPoolSize: 1,
    astroMARSPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-MIR', 'UST', 'MIR', {
    tsPairAddr: tsPoolArray[13],
    tsUSTPoolSize: 1,
    tsMIRPoolSize: 1,
    astroPairAddr: astroPoolArray[13],
    astroUSTPoolSize: 1,
    astroMIRPoolSize: 1,
    loopPairAddr: loopPoolArray[13],
    loopUSTPoolSize: 1,
    loopMIRPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-ORION', 'UST', 'ORION', {
    tsPairAddr: tsPoolArray[14],
    tsUSTPoolSize: 1,
    tsORIONPoolSize: 1,
    astroPairAddr: astroPoolArray[14],
    astroUSTPoolSize: 1,
    astroORIONPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-LOOPR', 'UST', 'LOOPR', {
    tsPairAddr: tsPoolArray[15],
    tsUSTPoolSize: 1,
    tsLOOPRPoolSize: 1,
    loopPairAddr: loopPoolArray[15],
    loopUSTPoolSize: 1,
    loopLOOPRPoolSize: 1
});
graph.addUndirectedEdgeWithKey('LUNA-LUNAX', 'LUNA', 'LUNAX', {
    tsPairAddr: tsPoolArray[16],
    tsLUNAPoolSize: 1,
    tsLUNAXPoolSize: 1,
    astroPairAddr: astroPoolArray[16],
    astroLUNAPoolSize: 1,
    astroLUNAXPoolSize: 1
});
graph.addUndirectedEdgeWithKey('LUNA-bLUNA', 'LUNA', 'bLUNA', {
    tsPairAddr: tsPoolArray[17],
    tsLUNAPoolSize: 1,
    tsbLUNAPoolSize: 1,
    astroPairAddr: astroPoolArray[17],
    astroLUNAPoolSize: 1,
    astrobLUNAPoolSize: 1
});
graph.addUndirectedEdgeWithKey('LUNA-cLUNA', 'LUNA', 'cLUNA', {
    tsPairAddr: tsPoolArray[18],
    tsLUNAPoolSize: 1,
    tscLUNAPoolSize: 1,
    astroPairAddr: astroPoolArray[18],
    astroLUNAPoolSize: 1,
    astrocLUNAPoolSize: 1
});
graph.addUndirectedEdgeWithKey('LUNA-stLUNA', 'LUNA', 'stLUNA', {
    tsPairAddr: tsPoolArray[19],
    tsLUNAPoolSize: 1,
    tsstLUNAPoolSize: 1,
    astroPairAddr: astroPoolArray[19],
    astroLUNAPoolSize: 1,
    astrostLUNAPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-LUNAX', 'UST', 'LUNAX', {
    tsPairAddr: tsPoolArray[20],
    tsUSTPoolSize: 1,
    tsLUNAXPoolSize: 1
});
graph.addUndirectedEdgeWithKey('LUNAX-bLUNA', 'LUNAX', 'bLUNA', {
    tsPairAddr: tsPoolArray[21],
    tsLUNAXPoolSize: 1,
    tsbLUNAPoolSize: 1
});
graph.addUndirectedEdgeWithKey('UST-aUST', 'UST', 'aUST', {
    tsPairAddr: tsPoolArray[22],
    tsUSTPoolSize: 1,
    tsaUSTPoolSize: 1,
    loopPairAddr: loopPoolArray[22],
    loopUSTPoolSize: 1,
    loopaUSTPoolSize: 1
});
graph.addUndirectedEdgeWithKey('aUST-KUJI', 'aUST', 'KUJI', {
    loopPairAddr: loopPoolArray[23],
    loopaUSTPoolSize: 1,
    loopKUJIPoolSize: 1
});
graph.addUndirectedEdgeWithKey('LOOP-ANC', 'LOOP', 'ANC', {
    loopPairAddr: loopPoolArray[24],
    loopLOOPPoolSize: 1,
    loopANCPoolSize: 1
});
graph.addUndirectedEdgeWithKey('LOOP-LUNA', 'LOOP', 'LUNA', {
    loopPairAddr: loopPoolArray[25],
    loopLOOPPoolSize: 1,
    loppLUNAPoolSize: 1
});

console.timeEnd('createTimer');

export let network = graph;