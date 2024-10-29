#!/usr/bin/env python
#
# BSD 2-Clause License
#
# Copyright (c) 2024, JakobDev
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:
# 
# * Redistributions of source code must retain the above copyright notice, this
#    list of conditions and the following disclaimer.
#
# * Redistributions in binary form must reproduce the above copyright notice,
#    this list of conditions and the following disclaimer in the documentation
#    and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
#DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
# SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
# CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
import tempfile
import asarPy
import shutil
import json
import sys
import os


def main() -> None:
    asar_path = sys.argv[1]
    extract_dir = tempfile.mktemp()

    asarPy.extract_asar(asar_path, extract_dir)

    with open(os.path.join(extract_dir, "package.json"), "r", encoding="utf-8") as f:
        package_json = json.load(f)

    package_json["desktopName"] = os.getenv("FLATPAK_ID") + ".desktop"

    with open(os.path.join(extract_dir, "package.json"), "w", encoding="utf-8") as f:
        json.dump(package_json, f)

    asarPy.pack_asar(extract_dir, asar_path)

    shutil.rmtree(extract_dir)


if __name__ == "__main__":
    main()
