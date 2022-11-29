'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.seed = void 0;
const client_1 = require('@prisma/client');
const prisma = new client_1.PrismaClient();
function createDoor() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.door.create({
            data: {
                isLocked: true,
                unlockCode: '1',
                lockAt: '22:00:00',
                unlockAt: '06:00:00',
            },
        });
    });
}
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createDoor();
        const doors = yield prisma.door.findMany();
        console.info('New state:\n', doors);
    });
}
exports.seed = seed;
exports.default = {
    seed,
};
