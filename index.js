import { LCDClient } from "@terra-money/terra.js";
import { network } from "./Network/createGraph.js";
const lcd = new LCDClient({
    URL: "https://twilight-rough-bird.terra-mainnet.quiknode.pro/610ab031e2a8f2dbf508ea457ad7af701fd3507e/",
    chainID: "columbus-5"
});

// all just testing stuff. ignore this

console.log(network.getEdgeAttribute('UST-LUNA', 'tsUSTPoolSize'));
// const test = await getPoolAmount(lcd, tsPoolArray[13], 0);
// const test1 = await getPoolAmount(lcd, tsPoolArray[13], 1);
// console.log(test);
// console.log(test1);
const marketParams = await lcd.market.parameters();
console.log(marketParams.pool_recovery_period);
// network.updateEdgeAttribute('UST-MIR', 'tsUSTPoolSize', n => test);
// network.updateEdgeAttribute('UST-MIR', 'tsLUNAPoolSize', n => test1)
// console.log(network.getEdgeAttribute('UST-MIR', 'tsUSTPoolSize'));
// console.log(network.order);
