"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const skynode_1 = require("@hanul/skynode");
const skyutil_1 = __importDefault(require("skyutil"));
const superagent_1 = __importDefault(require("superagent"));
const Form_1 = __importDefault(require("./Form"));
const Sended_1 = __importDefault(require("./Sended"));
const msg_js_1 = __importDefault(require("msg.js"));
class Swaper extends skynode_1.DomNode {
    constructor() {
        super(".swaper");
        this.loadHistoryNonce = 0;
        this.append((0, skynode_1.el)(".form-container", (this.fromForm = new Form_1.default(this, 8217, true)), (0, skynode_1.el)("img.arrow", { src: "/images/shared/icn/icn-arrow-right.svg", height: "50", alt: "icn-arrow-right" }), (this.toForm = new Form_1.default(this, 1))), (0, skynode_1.el)(".fee-container", (0, skynode_1.el)(".content", (0, skynode_1.el)("h3", (0, msg_js_1.default)("FEE_TITLE"))), (0, skynode_1.el)("p", "0 PAX")), (0, skynode_1.el)(".received-container", (0, skynode_1.el)("h3", (0, msg_js_1.default)("RECEIVED_TITLE")), (0, skynode_1.el)("p", "0 PAX")), (0, skynode_1.el)(".warning", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn-warning.svg", alt: "warning icon" }), (0, skynode_1.el)("p", (0, msg_js_1.default)("WARNING_TITLE"))), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("button", (0, msg_js_1.default)("APPROVE_BUTTON"), { click: () => { } }), (0, skynode_1.el)("button", (0, msg_js_1.default)("TRANSFER_BUTTON"))), (0, skynode_1.el)(".history", (0, skynode_1.el)("h2", "전송 기록"), (0, skynode_1.el)(".sended-title", (0, skynode_1.el)("h3", "보낸 체인"), (0, skynode_1.el)("h3", "상태")), (0, skynode_1.el)("hr.divider"), (this.sendedList = (0, skynode_1.el)(".sended-list"))));
        this.fromForm.on("changeChain", (chainId, originChainId) => {
            if (this.toForm.chainId === chainId) {
                this.toForm.changeChain(originChainId);
            }
            this.loadHistory();
        });
        this.toForm.on("changeChain", (chainId, originChainId) => {
            if (this.fromForm.chainId === chainId) {
                this.fromForm.changeChain(originChainId);
            }
            this.loadHistory();
        });
        this.loadHistory();
        this.fromForm.on("connect", () => this.loadHistory());
        this.toForm.on("connect", () => this.loadHistory());
    }
    async loadHistory() {
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined) {
            const sender = await this.fromForm.sender.loadAddress();
            const receiver = await this.toForm.sender.loadAddress();
            if (sender !== undefined && receiver !== undefined) {
                const count = await this.fromForm.sender.sendCount(sender, this.toForm.chainId, receiver);
                this.loadHistoryNonce += 1;
                const nonce = this.loadHistoryNonce;
                this.sendedList.empty();
                skyutil_1.default.repeatResultAsync(count.toNumber(), async (sendId) => {
                    if (this.loadHistoryNonce === nonce) {
                        this.addSended(sender, receiver, bignumber_1.BigNumber.from(sendId));
                    }
                });
            }
        }
    }
    addSended(sender, receiver, sendId) {
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined) {
            new Sended_1.default(this.fromForm.sender, this.toForm.sender, this.fromForm.chainId, this.toForm.chainId, sender, receiver, sendId.toNumber(), async () => {
                if (this.fromForm.sender !== undefined) {
                    const sended = await this.fromForm.sender.sended(sender, this.toForm.chainId, receiver, sendId);
                    this.receiveOverHorizon(receiver, this.toForm.chainId, sender, sendId, sended);
                }
            }).appendTo(this.sendedList, 0);
        }
    }
    async sendOverHorizon(amount) {
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver !== undefined) {
                await this.fromForm.sender.sendOverHorizon(this.toForm.chainId, receiver, amount);
            }
        }
    }
    async receiveOverHorizon(_receiver, toChain, sender, sendId, amount) {
        if (this.fromForm.sender !== undefined &&
            this.toForm.sender !== undefined &&
            this.toForm.chainId.toString() === toChain.toString()) {
            const receiver = await this.toForm.sender.loadAddress();
            if (receiver === _receiver) {
                try {
                    const result = await superagent_1.default
                        .get(`https://api.gaiabridge.com/pax/signsend?receiver=${receiver}&fromChain=${this.fromForm.chainId}&toChain=${this.toForm.chainId}&sender=${sender}&sendId=${sendId}&amount=${amount.toString()}`)
                        .send();
                    await this.toForm.sender.receiveOverHorizon(this.fromForm.chainId, sender, sendId, amount, result.text);
                }
                catch (error) {
                    alert(`Error: ${error.message}`);
                }
            }
        }
    }
}
exports.default = Swaper;
//# sourceMappingURL=Swaper.js.map