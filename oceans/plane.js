
function make_plane(n, m) {


}


class Plane {
  positions;
  height;
  width;
  indicies;

  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.positions = Array.from({length: height * width}, (_,i) => [i/width, i%width, 0]).flat(1);
    low_h = height - 1
    low_w = width - 1
    this.indicies = Array.from({length: low_h * low_w}, (_,i) => {
      point_1 = low_h * width + low_w;
      point_2 = point_1 + 1;
      point_3 = point_1 + width;
      point_4 = point_3 + 1;
      return [[point_1, point_3, point_4], [point_1, point_4, point_2]];
    }).flat(1);
  }

  assign_heightfield(heightfield) {
    heightfield.flat(1).forEach((x, i) => {
      this.positions[i*3 -1] = x;
    });
  }

  get vertex_normals() {
    // TODO: Calculate vertex normals
  }
}
