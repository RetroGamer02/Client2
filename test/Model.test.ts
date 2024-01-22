import * as fs from 'fs';
import Jagfile from '../src/js/jagex2/io/Jagfile';
import Model from '../src/js/jagex2/graphics/Model';

const models: Jagfile = new Jagfile(Uint8Array.from(fs.readFileSync('./test/resources/models')));
Model.unpack(models);

describe('Model', (): void => {
    describe('lighting', (): void => {
        it('shrimps interface model 2590', (): void => {
            const model: Model = Model.model(2590);
            expect(model.vertexCount).toBe(152);
            expect(model.faceCount).toBe(197);
            expect(model.texturedFaceCount).toBe(0);

            expect(model.vertexX).toStrictEqual(Int32Array.from([21, 17, 21, 26, 27, 22, 16, 17, 17, 16, 12, 12, 17, 20, 23, 29, 30, 24, 25, 21, 23, 13, 26, 14, 13, 15, 16, 12, 11, 13, 14, 16, 12, 10, 19, 18, 10, 19, 21, 21, 14, 21, 21, 22, 16, 22, 22, 11, 11, 0, 10, 5, 1, -1, 4, 5, 7, 6, 4, 3, 1, 0, -1, 0, -2, -5, -2, -1, -10, -11, -7, -10, -26, -11, 4, 2, 3, 5, 3, 0, 1, 1, 7, 4, 0, 0, 0, -7, -1, -1, -3, -3, -8, -3, -3, -7, -11, -8, -8, 1, 2, -3, 0, -21, -17, -12, -14, -16, -23, -25, -19, -18, -16, -12, -7, -8, -10, -11, -11, -9, -10, -9, -23, -21, -21, -14, -27, -24, -8, -7, -8, -7, -6, -5, -5, -5, -6, -6, -13, -14, -14, -10, -17, -17, -14, -19, -19, -19, 5, -5, -5, -5]));
            expect(model.vertexY).toStrictEqual(Int32Array.from([-4, -4, -4, -4, 0, 0, -4, -4, -4, -4, -4, 0, 0, 0, -4, -4, 0, -4, -4, 0, 0, -1, 0, -4, -4, -6, -4, -4, -4, -4, -4, 0, 0, 0, -2, 0, 0, 0, -2, 0, 0, 0, -2, -2, 0, 0, -2, -2, 0, 0, -2, -4, -4, -4, -4, 0, 0, -4, -4, -4, -4, -4, 0, 0, 0, -4, -4, 0, -4, -4, 0, 0, -1, 0, -4, -4, -6, -4, -4, -4, -4, -4, 0, 0, 0, -2, 0, 0, 0, -2, -2, 0, 0, 0, -2, -2, 0, 0, -2, -2, 0, 0, -2, -4, -4, -4, -4, 0, 0, -4, -4, 0, 0, 0, -4, -4, -4, -4, -4, -4, -4, 0, -4, -4, 0, -1, 0, 0, -6, -4, -4, -4, -4, -4, 0, 0, 0, 0, 0, -2, 0, 0, 0, -2, 0, -2, 0, -2, 0, 0, -2, -2]));
            expect(model.vertexZ).toStrictEqual(Int32Array.from([10, 7, 2, 6, 7, 11, 13, 11, 9, 8, 7, 7, 6, 1, -4, -1, -1, -10, -11, -5, -9, -22, -12, 12, 11, 10, 12, 13, 9, 9, 8, 14, 13, 9, 3, 4, 1, 3, 0, 0, -3, -1, -1, -5, -7, -6, -6, 10, 11, 11, 9, -12, -11, -16, -21, -21, -13, -7, -9, -9, -9, -6, -5, -11, -16, -21, -26, -28, -24, -27, -21, -24, -21, -28, -5, -5, -7, -7, -3, -4, -5, -7, -6, -3, -3, -13, -13, -7, -14, -14, -18, -17, -13, -19, -19, -21, -17, -21, -21, -3, -3, 5, -3, 20, 16, 20, 24, 24, 21, 11, 9, 8, 15, 19, 19, 21, 21, 22, 23, 24, 26, 26, 2, 4, 4, -10, 12, 2, 22, 22, 24, 21, 24, 21, 21, 25, 19, 13, 17, 17, 17, 9, 13, 13, 5, 8, 7, 7, 21, 23, 22, 21]));

            expect(model.faceVertexA).toStrictEqual(Int32Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 17, 17, 17, 17, 17, 17, 18, 18, 15, 13, 23, 23, 23, 23, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 29, 30, 5, 33, 34, 34, 36, 38, 38, 42, 43, 43, 46, 47, 47, 50, 51, 51, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 53, 53, 53, 54, 54, 54, 68, 68, 68, 68, 68, 68, 68, 69, 69, 66, 64, 74, 74, 74, 74, 75, 75, 75, 76, 76, 76, 76, 76, 77, 77, 78, 78, 78, 79, 79, 79, 80, 81, 56, 84, 85, 85, 89, 90, 90, 94, 95, 95, 98, 99, 99, 102, 103, 103, 103, 103, 103, 103, 104, 104, 104, 104, 105, 105, 105, 105, 105, 105, 106, 106, 106, 106, 106, 110, 110, 110, 110, 123, 123, 123, 108, 109, 122, 122, 128, 128, 128, 128, 128, 128, 128, 128, 129, 129, 130, 130, 131, 132, 132, 132, 120, 115, 115, 133, 133, 114, 137, 137, 139, 141, 141, 143, 144, 144, 144, 148, 148, 148]));
            expect(model.faceVertexB).toStrictEqual(Int32Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 14, 15, 16, 18, 15, 14, 19, 20, 21, 21, 22, 22, 19, 24, 25, 26, 27, 27, 28, 29, 29, 30, 9, 8, 7, 7, 6, 6, 31, 32, 32, 33, 10, 10, 10, 31, 11, 35, 36, 34, 39, 40, 42, 19, 44, 46, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 60, 61, 62, 63, 63, 64, 65, 65, 66, 67, 69, 66, 65, 70, 71, 71, 72, 72, 73, 73, 70, 75, 76, 77, 78, 78, 79, 80, 80, 81, 60, 59, 58, 58, 57, 57, 82, 83, 83, 84, 61, 61, 61, 82, 62, 86, 87, 89, 91, 92, 94, 70, 96, 98, 100, 101, 102, 104, 105, 106, 107, 108, 109, 109, 110, 111, 112, 112, 113, 114, 115, 116, 117, 117, 118, 119, 120, 121, 109, 122, 123, 124, 122, 125, 124, 126, 126, 126, 127, 129, 130, 119, 118, 117, 116, 115, 131, 131, 132, 132, 120, 133, 133, 134, 135, 135, 114, 133, 114, 136, 113, 138, 139, 137, 142, 143, 141, 111, 145, 147, 149, 150, 151]));
            expect(model.faceVertexC).toStrictEqual(Int32Array.from([2, 3, 4, 5, 6, 7, 8, 9, 1, 10, 11, 12, 2, 13, 14, 3, 15, 16, 4, 15, 14, 19, 20, 21, 18, 22, 15, 16, 14, 25, 26, 27, 24, 28, 29, 25, 30, 9, 8, 7, 26, 6, 27, 31, 32, 28, 33, 10, 29, 30, 9, 6, 10, 36, 37, 34, 40, 41, 40, 44, 45, 44, 49, 33, 49, 53, 54, 55, 56, 57, 58, 59, 60, 52, 61, 62, 63, 53, 64, 65, 54, 66, 67, 55, 66, 65, 70, 71, 68, 72, 69, 73, 66, 67, 65, 76, 77, 78, 75, 79, 80, 76, 81, 60, 59, 58, 77, 57, 78, 82, 83, 79, 84, 61, 80, 81, 60, 57, 61, 87, 88, 87, 92, 93, 92, 96, 97, 96, 101, 84, 101, 105, 106, 107, 108, 109, 104, 110, 111, 112, 105, 113, 114, 115, 116, 117, 106, 118, 119, 120, 121, 107, 122, 123, 124, 111, 125, 124, 123, 109, 122, 127, 125, 130, 119, 118, 117, 116, 115, 131, 129, 132, 130, 120, 119, 132, 134, 135, 120, 121, 133, 131, 136, 134, 136, 139, 140, 139, 143, 142, 143, 145, 146, 147, 150, 134, 151]));

            expect(model.faceColorA).toBeNull();
            expect(model.faceColorB).toBeNull();
            expect(model.faceColorC).toBeNull();
            expect(model.faceInfo).toBeNull();
            expect(model.facePriority).toBeNull();
            expect(model.faceAlpha).toBeNull();
            expect(model.faceColor).toStrictEqual(Int32Array.from([6080, 6080, 6080, 6080, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 4032, 0, 0, 4032, 4032, 4032, 4032, 0, 0, 0, 0, 0, 0, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 4032, 0, 0, 4032, 4032, 4032, 4032, 0, 0, 0, 0, 0, 0, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 4032, 4032, 6080, 4032, 4032, 6080, 6080, 6080, 6080, 0, 0, 0, 0, 0, 0, 0, 0, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080]));

            expect(model.priority).toBe(0);

            expect(model.texturedVertexA).toStrictEqual(Int32Array.from([]));
            expect(model.texturedVertexB).toStrictEqual(Int32Array.from([]));
            expect(model.texturedVertexC).toStrictEqual(Int32Array.from([]));

            expect(model.minX).toBe(0);
            expect(model.maxX).toBe(0);

            expect(model.minZ).toBe(0);
            expect(model.maxZ).toBe(0);

            expect(model.minY).toBe(0);
            expect(model.maxY).toBe(0);

            expect(model.radius).toBe(0);

            expect(model.minDepth).toBe(0);
            expect(model.maxDepth).toBe(0);

            expect(model.objRaise).toBe(0);

            expect(model.vertexLabel).toBeNull();
            expect(model.faceLabel).toBeNull();
            expect(model.labelVertices).toBeNull();
            expect(model.labelFaces).toBeNull();
            expect(model.pickable).toBeFalsy();
            expect(model.vertexNormal).toBeNull();
            expect(model.vertexNormalOriginal).toBeNull();

            model.calculateNormals(64, 768, -50, -10, -50, true);
            model.pickable = true;

            expect(model.vertexCount).toBe(152);
            expect(model.faceCount).toBe(197);

            expect(model.vertexCount).toBe(152);
            expect(model.faceCount).toBe(197);
            expect(model.texturedFaceCount).toBe(0);

            expect(model.vertexX).toStrictEqual(Int32Array.from([21, 17, 21, 26, 27, 22, 16, 17, 17, 16, 12, 12, 17, 20, 23, 29, 30, 24, 25, 21, 23, 13, 26, 14, 13, 15, 16, 12, 11, 13, 14, 16, 12, 10, 19, 18, 10, 19, 21, 21, 14, 21, 21, 22, 16, 22, 22, 11, 11, 0, 10, 5, 1, -1, 4, 5, 7, 6, 4, 3, 1, 0, -1, 0, -2, -5, -2, -1, -10, -11, -7, -10, -26, -11, 4, 2, 3, 5, 3, 0, 1, 1, 7, 4, 0, 0, 0, -7, -1, -1, -3, -3, -8, -3, -3, -7, -11, -8, -8, 1, 2, -3, 0, -21, -17, -12, -14, -16, -23, -25, -19, -18, -16, -12, -7, -8, -10, -11, -11, -9, -10, -9, -23, -21, -21, -14, -27, -24, -8, -7, -8, -7, -6, -5, -5, -5, -6, -6, -13, -14, -14, -10, -17, -17, -14, -19, -19, -19, 5, -5, -5, -5]));
            expect(model.vertexY).toStrictEqual(Int32Array.from([-4, -4, -4, -4, 0, 0, -4, -4, -4, -4, -4, 0, 0, 0, -4, -4, 0, -4, -4, 0, 0, -1, 0, -4, -4, -6, -4, -4, -4, -4, -4, 0, 0, 0, -2, 0, 0, 0, -2, 0, 0, 0, -2, -2, 0, 0, -2, -2, 0, 0, -2, -4, -4, -4, -4, 0, 0, -4, -4, -4, -4, -4, 0, 0, 0, -4, -4, 0, -4, -4, 0, 0, -1, 0, -4, -4, -6, -4, -4, -4, -4, -4, 0, 0, 0, -2, 0, 0, 0, -2, -2, 0, 0, 0, -2, -2, 0, 0, -2, -2, 0, 0, -2, -4, -4, -4, -4, 0, 0, -4, -4, 0, 0, 0, -4, -4, -4, -4, -4, -4, -4, 0, -4, -4, 0, -1, 0, 0, -6, -4, -4, -4, -4, -4, 0, 0, 0, 0, 0, -2, 0, 0, 0, -2, 0, -2, 0, -2, 0, 0, -2, -2]));
            expect(model.vertexZ).toStrictEqual(Int32Array.from([10, 7, 2, 6, 7, 11, 13, 11, 9, 8, 7, 7, 6, 1, -4, -1, -1, -10, -11, -5, -9, -22, -12, 12, 11, 10, 12, 13, 9, 9, 8, 14, 13, 9, 3, 4, 1, 3, 0, 0, -3, -1, -1, -5, -7, -6, -6, 10, 11, 11, 9, -12, -11, -16, -21, -21, -13, -7, -9, -9, -9, -6, -5, -11, -16, -21, -26, -28, -24, -27, -21, -24, -21, -28, -5, -5, -7, -7, -3, -4, -5, -7, -6, -3, -3, -13, -13, -7, -14, -14, -18, -17, -13, -19, -19, -21, -17, -21, -21, -3, -3, 5, -3, 20, 16, 20, 24, 24, 21, 11, 9, 8, 15, 19, 19, 21, 21, 22, 23, 24, 26, 26, 2, 4, 4, -10, 12, 2, 22, 22, 24, 21, 24, 21, 21, 25, 19, 13, 17, 17, 17, 9, 13, 13, 5, 8, 7, 7, 21, 23, 22, 21]));

            expect(model.faceVertexA).toStrictEqual(Int32Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 17, 17, 17, 17, 17, 17, 18, 18, 15, 13, 23, 23, 23, 23, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 29, 30, 5, 33, 34, 34, 36, 38, 38, 42, 43, 43, 46, 47, 47, 50, 51, 51, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 53, 53, 53, 54, 54, 54, 68, 68, 68, 68, 68, 68, 68, 69, 69, 66, 64, 74, 74, 74, 74, 75, 75, 75, 76, 76, 76, 76, 76, 77, 77, 78, 78, 78, 79, 79, 79, 80, 81, 56, 84, 85, 85, 89, 90, 90, 94, 95, 95, 98, 99, 99, 102, 103, 103, 103, 103, 103, 103, 104, 104, 104, 104, 105, 105, 105, 105, 105, 105, 106, 106, 106, 106, 106, 110, 110, 110, 110, 123, 123, 123, 108, 109, 122, 122, 128, 128, 128, 128, 128, 128, 128, 128, 129, 129, 130, 130, 131, 132, 132, 132, 120, 115, 115, 133, 133, 114, 137, 137, 139, 141, 141, 143, 144, 144, 144, 148, 148, 148]));
            expect(model.faceVertexB).toStrictEqual(Int32Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 14, 15, 16, 18, 15, 14, 19, 20, 21, 21, 22, 22, 19, 24, 25, 26, 27, 27, 28, 29, 29, 30, 9, 8, 7, 7, 6, 6, 31, 32, 32, 33, 10, 10, 10, 31, 11, 35, 36, 34, 39, 40, 42, 19, 44, 46, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 60, 61, 62, 63, 63, 64, 65, 65, 66, 67, 69, 66, 65, 70, 71, 71, 72, 72, 73, 73, 70, 75, 76, 77, 78, 78, 79, 80, 80, 81, 60, 59, 58, 58, 57, 57, 82, 83, 83, 84, 61, 61, 61, 82, 62, 86, 87, 89, 91, 92, 94, 70, 96, 98, 100, 101, 102, 104, 105, 106, 107, 108, 109, 109, 110, 111, 112, 112, 113, 114, 115, 116, 117, 117, 118, 119, 120, 121, 109, 122, 123, 124, 122, 125, 124, 126, 126, 126, 127, 129, 130, 119, 118, 117, 116, 115, 131, 131, 132, 132, 120, 133, 133, 134, 135, 135, 114, 133, 114, 136, 113, 138, 139, 137, 142, 143, 141, 111, 145, 147, 149, 150, 151]));
            expect(model.faceVertexC).toStrictEqual(Int32Array.from([2, 3, 4, 5, 6, 7, 8, 9, 1, 10, 11, 12, 2, 13, 14, 3, 15, 16, 4, 15, 14, 19, 20, 21, 18, 22, 15, 16, 14, 25, 26, 27, 24, 28, 29, 25, 30, 9, 8, 7, 26, 6, 27, 31, 32, 28, 33, 10, 29, 30, 9, 6, 10, 36, 37, 34, 40, 41, 40, 44, 45, 44, 49, 33, 49, 53, 54, 55, 56, 57, 58, 59, 60, 52, 61, 62, 63, 53, 64, 65, 54, 66, 67, 55, 66, 65, 70, 71, 68, 72, 69, 73, 66, 67, 65, 76, 77, 78, 75, 79, 80, 76, 81, 60, 59, 58, 77, 57, 78, 82, 83, 79, 84, 61, 80, 81, 60, 57, 61, 87, 88, 87, 92, 93, 92, 96, 97, 96, 101, 84, 101, 105, 106, 107, 108, 109, 104, 110, 111, 112, 105, 113, 114, 115, 116, 117, 106, 118, 119, 120, 121, 107, 122, 123, 124, 111, 125, 124, 123, 109, 122, 127, 125, 130, 119, 118, 117, 116, 115, 131, 129, 132, 130, 120, 119, 132, 134, 135, 120, 121, 133, 131, 136, 134, 136, 139, 140, 139, 143, 142, 143, 145, 146, 147, 150, 134, 151]));

            expect(model.faceColorA).toStrictEqual(Int32Array.from([6039, 6039, 6039, 6039, 3991, 3991, 3991, 3991, 3991, 4021, 4021, 4021, 4021, 4023, 4023, 6071, 6032, 6032, 6032, 6065, 6065, 4017, 4017, 4017, 6065, 6050, 6050, 6040, 4038, 2, 2, 3999, 3999, 4010, 4010, 2, 2, 2, 2, 2, 2, 3995, 3995, 3999, 3999, 3999, 4016, 4016, 4016, 4016, 4018, 3970, 4033, 6050, 6050, 6051, 6050, 6050, 6048, 6052, 6052, 6048, 6052, 6052, 6048, 6045, 6045, 6045, 6045, 3997, 3997, 3997, 3997, 3997, 4017, 4017, 4017, 4017, 4009, 4009, 6057, 6048, 6048, 6048, 6045, 6045, 3997, 3997, 3997, 3997, 6045, 6068, 6068, 6061, 4008, 2, 2, 3990, 3990, 3995, 3995, 2, 2, 2, 2, 2, 2, 3996, 3996, 3988, 3988, 3988, 4000, 4000, 4000, 4004, 4017, 3979, 4014, 6046, 6046, 6048, 6050, 6050, 6048, 6048, 6048, 6048, 6049, 6049, 6048, 6050, 6050, 6050, 6050, 6050, 6050, 6046, 3998, 3998, 3998, 4008, 4008, 4008, 4008, 4008, 4008, 3998, 3998, 3998, 3998, 3998, 6044, 6044, 3996, 3996, 6040, 3992, 3992, 6054, 6062, 6070, 6070, 2, 2, 2, 2, 2, 2, 2, 2, 3986, 3986, 3990, 3990, 4003, 3988, 3988, 3988, 3988, 4014, 4014, 3993, 3993, 4015, 6048, 6048, 6048, 6048, 6048, 6048, 6048, 6048, 6048, 6048, 6048, 6048]));
            expect(model.faceColorB).toStrictEqual(Int32Array.from([6069, 6071, 6032, 6018, 3970, 3985, 3995, 3999, 4009, 4009, 4019, 4036, 4040, 4040, 4038, 6068, 6068, 6040, 6018, 6050, 6040, 4020, 4022, 4023, 6056, 6056, 6040, 6040, 4022, 2, 2, 3995, 3999, 3999, 4016, 2, 2, 2, 2, 2, 2, 3995, 3985, 3985, 3970, 4004, 4004, 4033, 4019, 4019, 4019, 3970, 4036, 6036, 6051, 6050, 6032, 6049, 6048, 6070, 6051, 6048, 6023, 6051, 6048, 6065, 6057, 6048, 6034, 3979, 3989, 4009, 4019, 4013, 4013, 4015, 4029, 4023, 4023, 4008, 6050, 6050, 6061, 6059, 6068, 6061, 4002, 3987, 3988, 3988, 6052, 6052, 6080, 6080, 3987, 2, 2, 3996, 3988, 3988, 4000, 2, 2, 2, 2, 2, 2, 4009, 3989, 3989, 3970, 3970, 3970, 4014, 4015, 4015, 4015, 3970, 4029, 6018, 6047, 6048, 6018, 6049, 6048, 6035, 6048, 6048, 6018, 6048, 6048, 6046, 6056, 6046, 6034, 6054, 6062, 6062, 3996, 3980, 3996, 3996, 4022, 4015, 4014, 4019, 4015, 4015, 4008, 3998, 3988, 3976, 6062, 6070, 3992, 3985, 6070, 4002, 3985, 6078, 6078, 6078, 6088, 2, 2, 2, 2, 2, 2, 2, 2, 4003, 3988, 3988, 3988, 3993, 3993, 3987, 3970, 3970, 4015, 3993, 4015, 4005, 4022, 6018, 6048, 6048, 6048, 6048, 6048, 6028, 6048, 6048, 6018, 6048, 6048]));
            expect(model.faceColorC).toStrictEqual(Int32Array.from([6071, 6032, 6018, 6018, 3985, 3995, 3999, 4009, 4021, 4019, 4036, 4040, 4023, 4038, 4020, 6032, 6040, 6018, 6018, 6040, 6068, 4022, 4023, 4008, 6050, 6040, 6040, 6018, 4020, 2, 2, 3999, 4010, 4016, 4016, 2, 2, 2, 2, 2, 2, 3985, 3999, 3970, 4004, 4016, 4033, 4019, 4016, 4018, 4009, 3985, 4019, 6051, 6071, 6050, 6049, 6069, 6049, 6051, 6073, 6051, 6051, 6081, 6051, 6057, 6048, 6034, 6027, 3989, 4009, 4019, 4013, 4017, 4015, 4029, 4023, 4009, 4008, 4002, 6048, 6061, 6059, 6034, 6061, 6050, 3987, 3988, 3997, 4004, 6068, 6080, 6061, 6059, 4002, 2, 2, 3988, 3995, 4000, 4004, 2, 2, 2, 2, 2, 2, 3989, 3988, 3970, 3970, 4000, 4014, 4015, 4004, 4017, 4013, 3989, 4015, 6047, 6086, 6047, 6049, 6091, 6049, 6048, 6092, 6048, 6048, 6062, 6048, 6056, 6046, 6034, 6054, 6062, 6046, 6044, 3980, 3996, 4008, 4022, 4015, 4014, 4019, 4015, 3998, 4008, 3998, 3988, 3976, 3986, 6070, 6040, 3985, 3980, 6050, 3985, 3992, 6062, 6070, 6088, 6050, 2, 2, 2, 2, 2, 2, 2, 2, 3988, 3990, 3988, 3998, 3988, 3987, 3970, 3988, 3976, 3993, 4003, 4005, 3987, 4005, 6048, 6090, 6048, 6048, 6048, 6048, 6048, 6088, 6048, 6048, 6035, 6048]));
            expect(model.faceInfo).toBeNull();
            expect(model.facePriority).toBeNull();
            expect(model.faceAlpha).toBeNull();
            expect(model.faceColor).toBeNull();

            expect(model.priority).toBe(0);

            expect(model.texturedVertexA).toStrictEqual(Int32Array.from([]));
            expect(model.texturedVertexB).toStrictEqual(Int32Array.from([]));
            expect(model.texturedVertexC).toStrictEqual(Int32Array.from([]));

            expect(model.minX).toBe(0);
            expect(model.maxX).toBe(0);

            expect(model.minZ).toBe(0);
            expect(model.maxZ).toBe(0);

            expect(model.minY).toBe(0);
            expect(model.maxY).toBe(6);

            expect(model.radius).toBe(34);

            expect(model.minDepth).toBe(35);
            expect(model.maxDepth).toBe(69);

            expect(model.objRaise).toBe(0);

            expect(model.vertexLabel).toBeNull();
            expect(model.faceLabel).toBeNull();
            expect(model.labelVertices).toBeNull();
            expect(model.labelFaces).toBeNull();
            expect(model.pickable).toBeTruthy();
            expect(model.vertexNormal).toBeNull();
            expect(model.vertexNormalOriginal).toBeNull();

            expect(model.pickable).toBeTruthy();
        });
    });

    describe('unpacking', (): void => {
        it('model 2338', (): void => { // the first model in the cache
            const model: Model = Model.model(2338);
            expect(model.vertexCount).toBe(30);
            expect(model.faceCount).toBe(40);
            expect(model.texturedFaceCount).toBe(0);

            expect(model.vertexX).toStrictEqual(Int32Array.from([-19, -24, -11, -6, 0, 2, 11, 15, 28, 26, -8, 0, 11, 31, 0, 11, 31, 11, 28, 9, 26, 0, -6, -27, -5, -12, -26, -30, -27, -17]));
            expect(model.vertexY).toStrictEqual(Int32Array.from([0, 0, -4, 0, -4, 0, -2, 0, -2, 0, -4, -2, -4, -2, -4, -4, -2, -4, 0, 0, 0, -2, -4, 0, 0, -4, -2, 0, 0, 0]));
            expect(model.vertexZ).toStrictEqual(Int32Array.from([30, 25, 20, 35, 20, 35, 20, 35, 20, 32, 12, 10, 10, 8, 0, 0, -2, -10, -12, -25, -22, -10, 0, 16, -25, -10, 6, -5, -16, -23]));

            expect(model.faceVertexA).toStrictEqual(Int32Array.from([0, 0, 3, 3, 5, 5, 7, 7, 2, 2, 4, 4, 6, 6, 11, 11, 12, 12, 15, 15, 17, 17, 14, 14, 10, 10, 1, 1, 21, 21, 22, 22, 23, 23, 26, 26, 27, 27, 25, 25]));
            expect(model.faceVertexB).toStrictEqual(Int32Array.from([1, 2, 2, 4, 4, 6, 6, 8, 10, 11, 11, 12, 12, 13, 14, 15, 15, 16, 17, 18, 19, 20, 21, 17, 22, 14, 23, 10, 24, 19, 25, 21, 26, 22, 27, 25, 28, 29, 29, 24]));
            expect(model.faceVertexC).toStrictEqual(Int32Array.from([2, 3, 4, 5, 6, 7, 8, 9, 11, 4, 12, 6, 13, 8, 15, 12, 16, 13, 18, 16, 20, 18, 17, 15, 14, 11, 10, 2, 19, 17, 21, 14, 22, 10, 25, 22, 29, 25, 24, 21]));

            expect(model.faceColorA).toBeNull();
            expect(model.faceColorB).toBeNull();
            expect(model.faceColorC).toBeNull();
            expect(model.faceInfo).toBeNull();
            expect(model.facePriority).toBeNull();
            expect(model.faceAlpha).toBeNull();
            expect(model.faceColor).toStrictEqual(Int32Array.from([127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127]));

            expect(model.priority).toBe(0);

            expect(model.texturedVertexA).toStrictEqual(Int32Array.from([]));
            expect(model.texturedVertexB).toStrictEqual(Int32Array.from([]));
            expect(model.texturedVertexC).toStrictEqual(Int32Array.from([]));

            expect(model.minX).toBe(0);
            expect(model.maxX).toBe(0);

            expect(model.minZ).toBe(0);
            expect(model.maxZ).toBe(0);

            expect(model.minY).toBe(0);
            expect(model.maxY).toBe(0);

            expect(model.radius).toBe(0);

            expect(model.minDepth).toBe(0);
            expect(model.maxDepth).toBe(0);

            expect(model.objRaise).toBe(0);

            expect(model.vertexLabel).toBeNull();
            expect(model.faceLabel).toBeNull();
            expect(model.labelVertices).toBeNull();
            expect(model.labelFaces).toBeNull();
            expect(model.pickable).toBeFalsy();
            expect(model.vertexNormal).toBeNull();
            expect(model.vertexNormalOriginal).toBeNull();
        });

        it('shrimps model 2590', (): void => {
            const model: Model = Model.model(2590);
            expect(model.vertexCount).toBe(152);
            expect(model.faceCount).toBe(197);
            expect(model.texturedFaceCount).toBe(0);

            expect(model.vertexX).toStrictEqual(Int32Array.from([21, 17, 21, 26, 27, 22, 16, 17, 17, 16, 12, 12, 17, 20, 23, 29, 30, 24, 25, 21, 23, 13, 26, 14, 13, 15, 16, 12, 11, 13, 14, 16, 12, 10, 19, 18, 10, 19, 21, 21, 14, 21, 21, 22, 16, 22, 22, 11, 11, 0, 10, 5, 1, -1, 4, 5, 7, 6, 4, 3, 1, 0, -1, 0, -2, -5, -2, -1, -10, -11, -7, -10, -26, -11, 4, 2, 3, 5, 3, 0, 1, 1, 7, 4, 0, 0, 0, -7, -1, -1, -3, -3, -8, -3, -3, -7, -11, -8, -8, 1, 2, -3, 0, -21, -17, -12, -14, -16, -23, -25, -19, -18, -16, -12, -7, -8, -10, -11, -11, -9, -10, -9, -23, -21, -21, -14, -27, -24, -8, -7, -8, -7, -6, -5, -5, -5, -6, -6, -13, -14, -14, -10, -17, -17, -14, -19, -19, -19, 5, -5, -5, -5]));
            expect(model.vertexY).toStrictEqual(Int32Array.from([-4, -4, -4, -4, 0, 0, -4, -4, -4, -4, -4, 0, 0, 0, -4, -4, 0, -4, -4, 0, 0, -1, 0, -4, -4, -6, -4, -4, -4, -4, -4, 0, 0, 0, -2, 0, 0, 0, -2, 0, 0, 0, -2, -2, 0, 0, -2, -2, 0, 0, -2, -4, -4, -4, -4, 0, 0, -4, -4, -4, -4, -4, 0, 0, 0, -4, -4, 0, -4, -4, 0, 0, -1, 0, -4, -4, -6, -4, -4, -4, -4, -4, 0, 0, 0, -2, 0, 0, 0, -2, -2, 0, 0, 0, -2, -2, 0, 0, -2, -2, 0, 0, -2, -4, -4, -4, -4, 0, 0, -4, -4, 0, 0, 0, -4, -4, -4, -4, -4, -4, -4, 0, -4, -4, 0, -1, 0, 0, -6, -4, -4, -4, -4, -4, 0, 0, 0, 0, 0, -2, 0, 0, 0, -2, 0, -2, 0, -2, 0, 0, -2, -2]));
            expect(model.vertexZ).toStrictEqual(Int32Array.from([10, 7, 2, 6, 7, 11, 13, 11, 9, 8, 7, 7, 6, 1, -4, -1, -1, -10, -11, -5, -9, -22, -12, 12, 11, 10, 12, 13, 9, 9, 8, 14, 13, 9, 3, 4, 1, 3, 0, 0, -3, -1, -1, -5, -7, -6, -6, 10, 11, 11, 9, -12, -11, -16, -21, -21, -13, -7, -9, -9, -9, -6, -5, -11, -16, -21, -26, -28, -24, -27, -21, -24, -21, -28, -5, -5, -7, -7, -3, -4, -5, -7, -6, -3, -3, -13, -13, -7, -14, -14, -18, -17, -13, -19, -19, -21, -17, -21, -21, -3, -3, 5, -3, 20, 16, 20, 24, 24, 21, 11, 9, 8, 15, 19, 19, 21, 21, 22, 23, 24, 26, 26, 2, 4, 4, -10, 12, 2, 22, 22, 24, 21, 24, 21, 21, 25, 19, 13, 17, 17, 17, 9, 13, 13, 5, 8, 7, 7, 21, 23, 22, 21]));

            expect(model.faceVertexA).toStrictEqual(Int32Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 17, 17, 17, 17, 17, 17, 18, 18, 15, 13, 23, 23, 23, 23, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 27, 27, 27, 28, 28, 28, 29, 30, 5, 33, 34, 34, 36, 38, 38, 42, 43, 43, 46, 47, 47, 50, 51, 51, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 53, 53, 53, 54, 54, 54, 68, 68, 68, 68, 68, 68, 68, 69, 69, 66, 64, 74, 74, 74, 74, 75, 75, 75, 76, 76, 76, 76, 76, 77, 77, 78, 78, 78, 79, 79, 79, 80, 81, 56, 84, 85, 85, 89, 90, 90, 94, 95, 95, 98, 99, 99, 102, 103, 103, 103, 103, 103, 103, 104, 104, 104, 104, 105, 105, 105, 105, 105, 105, 106, 106, 106, 106, 106, 110, 110, 110, 110, 123, 123, 123, 108, 109, 122, 122, 128, 128, 128, 128, 128, 128, 128, 128, 129, 129, 130, 130, 131, 132, 132, 132, 120, 115, 115, 133, 133, 114, 137, 137, 139, 141, 141, 143, 144, 144, 144, 148, 148, 148]));
            expect(model.faceVertexB).toStrictEqual(Int32Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 12, 13, 14, 14, 15, 16, 18, 15, 14, 19, 20, 21, 21, 22, 22, 19, 24, 25, 26, 27, 27, 28, 29, 29, 30, 9, 8, 7, 7, 6, 6, 31, 32, 32, 33, 10, 10, 10, 31, 11, 35, 36, 34, 39, 40, 42, 19, 44, 46, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 60, 61, 62, 63, 63, 64, 65, 65, 66, 67, 69, 66, 65, 70, 71, 71, 72, 72, 73, 73, 70, 75, 76, 77, 78, 78, 79, 80, 80, 81, 60, 59, 58, 58, 57, 57, 82, 83, 83, 84, 61, 61, 61, 82, 62, 86, 87, 89, 91, 92, 94, 70, 96, 98, 100, 101, 102, 104, 105, 106, 107, 108, 109, 109, 110, 111, 112, 112, 113, 114, 115, 116, 117, 117, 118, 119, 120, 121, 109, 122, 123, 124, 122, 125, 124, 126, 126, 126, 127, 129, 130, 119, 118, 117, 116, 115, 131, 131, 132, 132, 120, 133, 133, 134, 135, 135, 114, 133, 114, 136, 113, 138, 139, 137, 142, 143, 141, 111, 145, 147, 149, 150, 151]));
            expect(model.faceVertexC).toStrictEqual(Int32Array.from([2, 3, 4, 5, 6, 7, 8, 9, 1, 10, 11, 12, 2, 13, 14, 3, 15, 16, 4, 15, 14, 19, 20, 21, 18, 22, 15, 16, 14, 25, 26, 27, 24, 28, 29, 25, 30, 9, 8, 7, 26, 6, 27, 31, 32, 28, 33, 10, 29, 30, 9, 6, 10, 36, 37, 34, 40, 41, 40, 44, 45, 44, 49, 33, 49, 53, 54, 55, 56, 57, 58, 59, 60, 52, 61, 62, 63, 53, 64, 65, 54, 66, 67, 55, 66, 65, 70, 71, 68, 72, 69, 73, 66, 67, 65, 76, 77, 78, 75, 79, 80, 76, 81, 60, 59, 58, 77, 57, 78, 82, 83, 79, 84, 61, 80, 81, 60, 57, 61, 87, 88, 87, 92, 93, 92, 96, 97, 96, 101, 84, 101, 105, 106, 107, 108, 109, 104, 110, 111, 112, 105, 113, 114, 115, 116, 117, 106, 118, 119, 120, 121, 107, 122, 123, 124, 111, 125, 124, 123, 109, 122, 127, 125, 130, 119, 118, 117, 116, 115, 131, 129, 132, 130, 120, 119, 132, 134, 135, 120, 121, 133, 131, 136, 134, 136, 139, 140, 139, 143, 142, 143, 145, 146, 147, 150, 134, 151]));

            expect(model.faceColorA).toBeNull();
            expect(model.faceColorB).toBeNull();
            expect(model.faceColorC).toBeNull();
            expect(model.faceInfo).toBeNull();
            expect(model.facePriority).toBeNull();
            expect(model.faceAlpha).toBeNull();
            expect(model.faceColor).toStrictEqual(Int32Array.from([6080, 6080, 6080, 6080, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 4032, 0, 0, 4032, 4032, 4032, 4032, 0, 0, 0, 0, 0, 0, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 4032, 0, 0, 4032, 4032, 4032, 4032, 0, 0, 0, 0, 0, 0, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 4032, 4032, 6080, 4032, 4032, 6080, 6080, 6080, 6080, 0, 0, 0, 0, 0, 0, 0, 0, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 4032, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080, 6080]));

            expect(model.priority).toBe(0);

            expect(model.texturedVertexA).toStrictEqual(Int32Array.from([]));
            expect(model.texturedVertexB).toStrictEqual(Int32Array.from([]));
            expect(model.texturedVertexC).toStrictEqual(Int32Array.from([]));

            expect(model.minX).toBe(0);
            expect(model.maxX).toBe(0);

            expect(model.minZ).toBe(0);
            expect(model.maxZ).toBe(0);

            expect(model.minY).toBe(0);
            expect(model.maxY).toBe(0);

            expect(model.radius).toBe(0);

            expect(model.minDepth).toBe(0);
            expect(model.maxDepth).toBe(0);

            expect(model.objRaise).toBe(0);

            expect(model.vertexLabel).toBeNull();
            expect(model.faceLabel).toBeNull();
            expect(model.labelVertices).toBeNull();
            expect(model.labelFaces).toBeNull();
            expect(model.pickable).toBeFalsy();
            expect(model.vertexNormal).toBeNull();
            expect(model.vertexNormalOriginal).toBeNull();
        });
    });
});
