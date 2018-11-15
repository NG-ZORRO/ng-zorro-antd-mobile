#!/bin/sh

cd `dirname $0`
cd "../../"
BASE_HOME="`pwd`"
PUBLISH_DIST=publish
if [ ! -d "$BASE_HOME/$PUBLISH_DIST" ]; then
    echo "publish dir not found. Please build first."
    exit 1;
fi

DIR_TARGET="$BASE_HOME/$PUBLISH_DIST"
cd "$DIR_TARGET"
`npm publish`
echo "publish finish!!!"
rm -fr "$DIR_TARGET"