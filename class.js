class Karyawan {
  constructor(nama, jabatan, gaji) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.gaji = gaji;
  }

  info() {
    return console.log(
      `${this.nama} bekerja di perusahaan dengan jabatan ${this.jabatan} dengan gaji ${this.gaji}`
    );
  }
}

const karyawan = new Karyawan("Fathir", "Dosen", 500);
karyawan.info();
